package com.wehee.domain.lounge.service;

import com.wehee.api.lounge.dto.*;
import com.wehee.domain.lounge.entity.*;
import com.wehee.domain.lounge.repository.*;
import com.wehee.domain.user.entity.User;
import com.wehee.domain.user.service.UserService;
import com.wehee.utils.MBTI;
import jakarta.transaction.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class LoungeService {
    private final PostRepository postRepository;
    private final ScrapRepository scrapRepository;
    private final UserService userService;
    private final LikeRepository likeRepository;
    private final CommentRepository commentRepository;
    private final HotPostRepository hotPostRepository;

    public PostResponse addPost(AddPostRequest addPostRequest) {
        User user=userService.getAuthenticatedUser();

        if(user == null) {
            return new PostResponse("회원정보가 없습니다.");
        }

        Post post=new Post(addPostRequest.getTitle(),addPostRequest.getContent(),user);
        save(post);

        if(post!=null) {
            return new PostResponse(post.getPostId(), post.getMbti(),
                post.getTitle(), post.getContent(), post.getPostUser().getUserId(),
                post.getPostUser().getNickname(), post.getPostUser().getProfile(), post.getUploadTime(), post.getCommentCount(),
                false, post.getLikeCount(), false, post.getHit(), null);
        } else {
            return new PostResponse("게시글 등록에 실패하였습니다.");
        }
    }

    public PostResponse viewPostById(int postId) {
        User user=userService.getAuthenticatedUser();

        if(user == null) {
            return new PostResponse("회원정보가 없습니다.");
        } else if(user.isWithdrawal()) {
            return new PostResponse("탈퇴한 회원은 본 서비스를 이용할 수 없습니다.");
        }

        Post post=postRepository.findById(postId);
        if(post==null) {
            return new PostResponse("게시글이 없습니다.");
        } else if(post.getState() != 0) {
            return new PostResponse("삭제된 게시글입니다.");
        } else if(post.getMbti() != user.getMbti()) {
            return new PostResponse("조회할 수 없는 게시글입니다.");
        }

        post.updateHit();
        List<Comment> commentList=commentRepository.findByPost(post);
        List<CommentDto> comments=new ArrayList<CommentDto>();

        for(Comment comment: commentList) {
            User commentUser=comment.getUser();
            comments.add(new CommentDto(comment.getCommentId(),comment.getUser().getUserId(),
                commentUser.isWithdrawal()?"탈퇴한 회원":commentUser.getNickname(),
                commentUser.isWithdrawal()?null:commentUser.getProfile(),comment.getContent(),
                comment.getUploadTime()));
        }

        return new PostResponse(post.getPostId(), post.getMbti(),
            post.getTitle(), post.getContent(), post.getPostUser().getUserId(),
            post.getPostUser().isWithdrawal()?"탈퇴한 회원":post.getPostUser().getNickname(),
                post.getPostUser().isWithdrawal()?null:post.getPostUser().getProfile(), post.getUploadTime(),
                post.getCommentCount(), likeRepository.findIfExists(user,post), post.getLikeCount(),
            scrapRepository.findIfExists(user,post), post.getHit(), comments);
    }

    public PostResponse updatePost(UpdatePostRequest updatePostRequest) {
        User user=userService.getAuthenticatedUser();

        if(user == null) {
            return new PostResponse("회원정보가 없습니다.");
        } else if(user.isWithdrawal()) {
            return new PostResponse("탈퇴한 회원은 본 서비스를 이용할 수 없습니다.");
        }

        Post post=findById(updatePostRequest.getPostId());
        if(post==null) {
            return new PostResponse("게시글이 없습니다.");
        } else if(post.getPostUser() != user) {
            return new PostResponse("게시글은 작성한 사용자만이 수정할 수 있습니다.");
        } else if(post.getState() != 0 || post.getMbti() != user.getMbti()) {
            return new PostResponse("수정할 수 없는 게시글입니다.");
        }

        post.updatePost(updatePostRequest.getTitle(),updatePostRequest.getContent());
        save(post);

        List<Comment> commentList=commentRepository.findByPost(post);
        List<CommentDto> comments=new ArrayList<CommentDto>();

        for(Comment comment: commentList) {
            User commentUser=comment.getUser();
            comments.add(new CommentDto(comment.getCommentId(),comment.getUser().getUserId(),
                commentUser.isWithdrawal()?"탈퇴한 회원":commentUser.getNickname(),
                commentUser.isWithdrawal()?null:commentUser.getProfile(),comment.getContent(),comment.getUploadTime()));
        }

        return new PostResponse(post.getPostId(), post.getMbti(),
            post.getTitle(), post.getContent(), post.getPostUser().getUserId(),
            post.getPostUser().getNickname(), post.getPostUser().getProfile(), post.getUploadTime(),
                post.getCommentCount(), likeRepository.findIfExists(user,post), post.getLikeCount(),
            scrapRepository.findIfExists(user,post), post.getHit(), comments);
    }

    public LoungeResponse removePost(int postId) {
        User user=userService.getAuthenticatedUser();

        if(user == null) {
            return new LoungeResponse("회원정보가 없습니다.");
        } else if(user.isWithdrawal()) {
            return new LoungeResponse("탈퇴한 회원은 본 서비스를 이용할 수 없습니다.");
        }

        Post post=findById(postId);
        if(post==null) {
            return new LoungeResponse("게시글이 없습니다.");
        } else if(post.getPostUser() != user) {
            return new LoungeResponse("게시글은 작성한 사용자만이 삭제할 수 있습니다.");
        } else if(post.getState() != 0 || post.getMbti() != user.getMbti()) {
            return new LoungeResponse("삭제할 수 없는 게시글입니다.");
        }

        post.removePost();
        commentRepository.removeCommentRelatedToPost(post, LocalDateTime.now());
        save(post);

        return new LoungeResponse();
    }

    public ListPostResponse listPost() {
        User user=userService.getAuthenticatedUser();

        if(user == null) {
            return new ListPostResponse("회원정보가 없습니다.");
        } else if(user.isWithdrawal()) {
            return new ListPostResponse("탈퇴한 회원은 본 서비스를 이용할 수 없습니다.");
        }

        List<Post> postList=postRepository.findByMbti(user.getMbti());

        if(postList == null) {
            return new ListPostResponse("게시글 조회에 실패했습니다.");
        }

        List<ListPostDto> list=new ArrayList<ListPostDto>();
        for(int i=0;i< postList.size();i++) {
            Post post=postList.get(i);
            User postUser=post.getPostUser();
            list.add(new ListPostDto(post.getPostId(),post.getTitle(),post.getContent(),post.getCommentCount(),postUser.getUserId(),
                postUser.isWithdrawal()?"탈퇴한 회원":postUser.getNickname(),post.getLikeCount(),
                post.getHit(),post.getUploadTime()));
        }

        return new ListPostResponse(user.getMbti(),postList.size(),list);
    }

    public ListPostResponse searchPost(String keyword) {
        User user=userService.getAuthenticatedUser();

        if(user == null) {
            return new ListPostResponse("회원정보가 없습니다.");
        } else if(user.isWithdrawal()) {
            return new ListPostResponse("탈퇴한 회원은 본 서비스를 이용할 수 없습니다.");
        } else if(keyword == null || keyword.equals("")) {
            return new ListPostResponse("검색어를 입력해주세요.");
        }

        List<Post> commentPostList=postRepository.searchPostByCommentKeyword(user.getMbti(),keyword);
        List<Post> postList=postRepository.searchPostByKeyword(user.getMbti(),keyword);
        List<Post> resultList=new ArrayList<>();

        if(commentPostList == null) {
            resultList=postList;
        } else if(postList == null) {
            resultList=commentPostList;
        } else {
            int c = 0, p = 0;

            while (c < commentPostList.size() || p < postList.size()) {
                if (c >= commentPostList.size()) {
                    resultList.add(postList.get(p++));
                } else if (p >= postList.size()) {
                    resultList.add(commentPostList.get(c++));
                } else if (commentPostList.get(c).equals(postList.get(p).getPostId())) {
                    resultList.add(postList.get(p++));
                    c++;
                } else if (commentPostList.get(c).getUploadTime().isAfter(postList.get(p).getUploadTime())) {
                    resultList.add(commentPostList.get(c++));
                } else {
                    resultList.add(postList.get(p++));
                }
            }
        }

        if(resultList == null) {
            return new ListPostResponse("게시글 조회에 실패했습니다.");
        }

        List<ListPostDto> list=new ArrayList<ListPostDto>();
        for(int i=0;i<resultList.size();i++) {
            Post post=resultList.get(i);
            User postUser=post.getPostUser();
            list.add(new ListPostDto(post.getPostId(),post.getTitle(),post.getContent(),post.getCommentCount(),postUser.getUserId(),
                    postUser.isWithdrawal()?"탈퇴한 회원":postUser.getNickname(),post.getLikeCount(),
                    post.getHit(),post.getUploadTime()));
        }

        return new ListPostResponse(user.getMbti(),resultList.size(),list);
    }

    public CommentResponse addComment(AddCommentRequest addCommentRequest) {
        User user=userService.getAuthenticatedUser();

        if(user == null) {
            return new CommentResponse("회원정보가 없습니다.");
        } else if(user.isWithdrawal()) {
            return new CommentResponse("탈퇴한 회원은 본 서비스를 이용할 수 없습니다.");
        }

        Post post=findById(addCommentRequest.getPostId());

        if(post==null) {
            return new CommentResponse("게시글이 없습니다.");
        } else if(post.getMbti() != user.getMbti()) {
            return new CommentResponse("댓글을 작성할 권한이 없습니다.");
        } else if(post.getState() != 0) {
            return new CommentResponse("삭제된 게시글입니다.");
        }

        Comment c=new Comment(post,user,addCommentRequest.getContent());
        post.addCommentCount();
        save(post);
        save(c);

        List<Comment> commentList=commentRepository.findByPost(post);
        List<CommentDto> comments=new ArrayList<CommentDto>();

        for(Comment comment: commentList) {
            User commentUser=comment.getUser();
            comments.add(new CommentDto(comment.getCommentId(),comment.getUser().getUserId(),
                commentUser.isWithdrawal()?"탈퇴한 회원":commentUser.getNickname(),
                commentUser.isWithdrawal()?null:commentUser.getProfile(),comment.getContent(),comment.getUploadTime()));
        }

        return new CommentResponse(comments);
    }

    public CommentResponse updateComment(UpdateCommentRequest updateCommentRequest) {
        User user=userService.getAuthenticatedUser();

        if(user == null) {
            return new CommentResponse("회원정보가 없습니다.");
        } else if(user.isWithdrawal()) {
            return new CommentResponse("탈퇴한 회원은 본 서비스를 이용할 수 없습니다.");
        }

        Comment comment=commentRepository.findById(updateCommentRequest.getCommentId());
        if(comment == null) {
            return new CommentResponse("댓글이 없습니다.");
        } else if(comment.getUser() != user) {
            return new CommentResponse("댓글은 작성자만 수정할 수 있습니다.");
        } else if(comment.getState() != 0) {
            return new CommentResponse("삭제된 댓글입니다.");
        }

        Post post=comment.getPost();

        if(post == null) {
            return new CommentResponse("게시글이 없습니다.");
        } else if(post.getState() != 0 ) {
            return new CommentResponse("삭제된 게시글입니다.");
        } else if(post.getMbti() != user.getMbti()) {
            return new CommentResponse("댓글을 수정할 권한이 없습니다.");
        }

        comment.updateContent(updateCommentRequest.getContent());
        save(comment);

        List<Comment> commentList=commentRepository.findByPost(post);
        List<CommentDto> comments=new ArrayList<CommentDto>();

        for(Comment c: commentList) {
            User commentUser=c.getUser();
            comments.add(new CommentDto(c.getCommentId(),commentUser.getUserId(),
                commentUser.isWithdrawal()?"탈퇴한 회원":commentUser.getNickname(),
                commentUser.isWithdrawal()?null:commentUser.getProfile(),
                c.getContent(),c.getUploadTime()));
        }

        return new CommentResponse(comments);
    }

    public CommentResponse deleteComment(int commentId) {
        User user=userService.getAuthenticatedUser();

        if(user == null) {
            return new CommentResponse("회원정보가 없습니다.");
        } else if(user.isWithdrawal()) {
            return new CommentResponse("탈퇴한 회원은 본 서비스를 이용할 수 없습니다.");
        }

        Comment comment=commentRepository.findById(commentId);
        if(comment == null) {
            return new CommentResponse("댓글이 없습니다.");
        } else if(comment.getUser() != user) {
            return new CommentResponse("댓글은 작성자만 삭제할 수 있습니다.");
        } else if(comment.getState() != 0) {
            return new CommentResponse("이미 삭제된 댓글입니다.");
        }

        Post post=comment.getPost();

        if(post == null) {
            return new CommentResponse("게시글이 없습니다.");
        } else if(post.getState() != 0 ) {
            return new CommentResponse("삭제된 게시글입니다.");
        } else if(post.getMbti() != user.getMbti()) {
            return new CommentResponse("댓글을 수정할 권한이 없습니다.");
        }

        post.substractCommentCount();
        comment.delete();
        save(post);
        save(comment);

        List<Comment> commentList=commentRepository.findByPost(post);
        List<CommentDto> comments=new ArrayList<CommentDto>();

        for(Comment c: commentList) {
            User commentUser=c.getUser();
            comments.add(new CommentDto(c.getCommentId(),commentUser.getUserId(),
                commentUser.isWithdrawal()?"탈퇴한 회원":commentUser.getNickname(),
                commentUser.isWithdrawal()?null:commentUser.getProfile(),
                c.getContent(),c.getUploadTime()));
        }

        return new CommentResponse(comments);
    }

    public LoungeResponse distributeLike(int postId) {
        User user=userService.getAuthenticatedUser();

        if(user == null) {
            return new LoungeResponse("회원정보가 없습니다.");
        } else if(user.isWithdrawal()) {
            return new LoungeResponse("탈퇴한 회원은 본 서비스를 이용할 수 없습니다.");
        }

        Post post=findById(postId);
        if(post == null) {
            return new LoungeResponse("게시물이 없습니다.");
        } else if(user.getMbti() != post.getMbti()) {
            Like like=likeRepository.find(user,post);
            return like==null?new LoungeResponse("좋아요할 권한이 없습니다."):new LoungeResponse("좋아요를 취소할 권한이 없습니다.");
        } else if(post.getState() != 0) {
            return new LoungeResponse("삭제된 게시글입니다.");
        }

        Like like=likeRepository.find(user,post);

        if(like == null) {
            like=new Like(post,user);
            post.addLikeCount();
            save(like);
        } else {
            post.substractLikeCount();
            likeRepository.removeLike(like);
        }

        save(post);
        return new LoungeResponse(post.getLikeCount());
    }

    public HotPostListResponse listHotPost() {
        User user=userService.getAuthenticatedUser();

        if(user == null) {
            return new HotPostListResponse("회원정보가 없습니다.");
        } else if(user.isWithdrawal()) {
            return new HotPostListResponse("탈퇴한 회원은 본 서비스를 이용할 수 없습니다.");
        }

        Map<MBTI,Integer> map=new TreeMap<>();

        List<HotPost> hotPostList=hotPostRepository.findAll();

        if(hotPostList == null) {
            return new HotPostListResponse("인기게시글을 불러오는데 실패했습니다.");
        } else if(hotPostList.size() == 0) {
            return new HotPostListResponse("인기게시글이 없습니다.");
        }

        List<HotPostDto> hotPostDtoList=new ArrayList<>();

        for(HotPost hotPost: hotPostList) {
            Post post=hotPost.getPost();
            int count=map.getOrDefault(post.getMbti(),0);
            if(count==0) {
                map.put(post.getMbti(),1);
            } else {
                map.replace(post.getMbti(),count+1);
            }

            hotPostDtoList.add(new HotPostDto(post.getPostId(),hotPost.getRank(),post.getMbti(), post.getTitle(), post.getCommentCount(),
                    post.getLikeCount(), post.getHit(), post.getState()));
        }

        return new HotPostListResponse(map.size(),map,hotPostDtoList);
    }

    public PostResponse viewHotPost(int postId) {
        User user=userService.getAuthenticatedUser();

        if(user == null) {
            return new PostResponse("회원정보가 없습니다.");
        } else if(user.isWithdrawal()) {
            return new PostResponse("탈퇴한 회원은 본 서비스를 이용할 수 없습니다.");
        }

        Post post=postRepository.findHotPostById(postId);

        if(post == null) {
            return new PostResponse("게시글 조회에 실패하였습니다.");
        } else if(post.getState() != 0) {
            return new PostResponse("삭제된 게시글입니다.");
        }

        post.updateHit();
        List<Comment> commentList=commentRepository.findByPost(post);
        List<CommentDto> comments=new ArrayList<CommentDto>();

        for(Comment comment: commentList) {
            User commentUser=comment.getUser();
            comments.add(new CommentDto(comment.getCommentId(),comment.getUser().getUserId(),
                commentUser.isWithdrawal()?"탈퇴한 회원":commentUser.getNickname(),
                commentUser.getProfile(),comment.getContent(),comment.getUploadTime()));
        }

        User postUser=post.getPostUser();

        return new PostResponse(user.getMbti()==post.getMbti()?1:0,postId,post.getMbti(),post.getTitle(),
                post.getContent(),postUser.getUserId(),postUser.isWithdrawal()?"탈퇴한 회원":postUser.getNickname(),
                postUser.isWithdrawal()?null:postUser.getProfile(), post.getUploadTime(),post.getCommentCount(),
                likeRepository.findIfExists(user,post),post.getLikeCount(), scrapRepository.findIfExists(user,post),
                post.getHit(),comments);
    }

    public MyPostResponse viewMyPost() {
        User user=userService.getAuthenticatedUser();

        if(user == null) {
            return new MyPostResponse("회원정보가 없습니다.");
        } else if(user.isWithdrawal()) {
            return new MyPostResponse("탈퇴한 회원은 본 서비스를 이용할 수 없습니다.");
        }

        List<Post> postList=postRepository.findMyPost(user);

        if(postList == null) {
            return new MyPostResponse("게시글 조회에 실패했습니다.");
        }

        List<MyPostDto> list=new ArrayList<MyPostDto>();
        for(int i=0;i<postList.size();i++) {
            Post post=postList.get(i);
            list.add(new MyPostDto(post.getPostId(),post.getTitle(),post.getContent(),
                post.getCommentCount(),post.getLikeCount(),post.getHit(),post.getUploadTime()));
        }

        return new MyPostResponse(user.getMbti(),postList.size(),list);
    }

    public MyCommentResponse viewMyComment() {
        User user=userService.getAuthenticatedUser();

        if(user == null) {
            return new MyCommentResponse("회원정보가 없습니다.");
        } else if(user.isWithdrawal()) {
            return new MyCommentResponse("탈퇴한 회원은 본 서비스를 이용할 수 없습니다.");
        }

        List<Post> postList=postRepository.findMyComment(user);

        if(postList == null) {
            return new MyCommentResponse("게시글 조회에 실패했습니다.");
        }

        List<MyCommentDto> list=new ArrayList<MyCommentDto>();
        for(int i=0;i<postList.size();i++) {
            Post post=postList.get(i);
            User postUser=post.getPostUser();
            list.add(new MyCommentDto(post.getPostId(),post.getTitle(),post.getContent(),
                post.getCommentCount(),postUser.getUserId(),
                postUser.isWithdrawal()?"탈퇴한 회원":postUser.getNickname(),post.getLikeCount(),
                post.getHit(),post.getUploadTime()));
        }

        return new MyCommentResponse(user.getMbti(),postList.size(),list);
    }

    public LoungeResponse distributeScrap(int postId) {
        User user=userService.getAuthenticatedUser();

        if(user == null) {
            return new LoungeResponse("회원정보가 없습니다.");
        } else if(user.isWithdrawal()) {
            return new LoungeResponse("탈퇴한 회원은 본 서비스를 이용할 수 없습니다.");
        }

        Post post=findById(postId);
        if(post == null) {
            return new LoungeResponse("게시물이 없습니다.");
        } else if(user.getMbti() != post.getMbti()) {
            Scrap scrap=scrapRepository.findByUserAndPost(user,post);
            return scrap==null?new LoungeResponse("스크랩할 권한이 없습니다."):new LoungeResponse("스크랩을 취소할 권한이 없습니다.");
        } else if(post.getState() != 0) {
            return new LoungeResponse("삭제된 게시글입니다.");
        }

        Scrap scrap=scrapRepository.findByUserAndPost(user,post);
        if(scrap==null) {
            scrap=new Scrap(post,user);
            save(scrap);
            return new LoungeResponse();
        } else {
            scrapRepository.removeScrap(scrap);
            return new LoungeResponse(0);
        }
    }

    public ScrapListResponse viewMyScrap() {
        User user=userService.getAuthenticatedUser();

        if(user == null) {
            return new ScrapListResponse("회원정보가 없습니다.");
        } else if(user.isWithdrawal()) {
            return new ScrapListResponse("탈퇴한 회원은 본 서비스를 이용할 수 없습니다.");
        }

        List<Scrap> scrapList=scrapRepository.findByUser(user);

        if(scrapList == null) {
            return new ScrapListResponse("스크랩한 게시글 조회에 실패했습니다.");
        }

        List<ScrapDto> list=new ArrayList<ScrapDto>();
        for(int i=0;i<scrapList.size();i++) {
            Post post=scrapList.get(i).getPost();
            User postUser=post.getPostUser();
            list.add(new ScrapDto(post.getPostId(),post.getTitle(),post.getContent(),
                postUser.getUserId(), postUser.isWithdrawal()?"탈퇴한 회원":postUser.getNickname(),
                post.getHit(),post.getLikeCount(),post.getCommentCount(), post.getUploadTime()));
        }

        return new ScrapListResponse(user.getMbti(),scrapList.size(),list);
    }

    public void save(Post post) {
        Post temp=postRepository.findById(post.getPostId());
        if(temp==null)
            postRepository.save(post);
    }

    public void save(Comment comment) {
        Comment temp=commentRepository.findById(comment.getCommentId());
        if(temp==null)
            commentRepository.save(comment);
    }

    public void save(Scrap scrap) {
        Scrap temp=scrapRepository.findById(scrap.getScrapId());
        if(temp==null)
            scrapRepository.save(scrap);
    }

    public void save(Like like) {
        Like temp=likeRepository.findById(like.getLikeId());
        if(temp==null)
            likeRepository.save(like);
    }

    public Post findById(int id) {
        return postRepository.findById(id);
    }
}