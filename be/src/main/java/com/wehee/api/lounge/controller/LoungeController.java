package com.wehee.api.lounge.controller;
import com.wehee.api.lounge.dto.*;
import com.wehee.common.ApiResponse;

import com.wehee.domain.lounge.service.LoungeService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/lounge")
public class LoungeController {
    private final LoungeService loungeService;

    @PostMapping("/post/write")
    public ApiResponse<PostResponse> addPost(@RequestBody AddPostRequest addPostRequest) {
        return ApiResponse.success("result",loungeService.addPost(addPostRequest));
    }

    @PostMapping("/post/view")
    public ApiResponse<PostResponse> viewPost(@RequestParam int postId) {
        return ApiResponse.success("result",loungeService.viewPostById(postId));
    }

    @PostMapping("/post/edit")
    public ApiResponse<PostResponse> updatePost(@RequestBody UpdatePostRequest updatePostRequest) {
        return ApiResponse.success("result",loungeService.updatePost(updatePostRequest));
    }

    @PostMapping("/post/remove")
    public ApiResponse<LoungeResponse> removePost(@RequestParam int postId) {
        return ApiResponse.success("result",loungeService.removePost(postId));
    }

    @PostMapping("/post/list")
    public ApiResponse<ListPostResponse> listPost() {
        return ApiResponse.success("result", loungeService.listPost());
    }

    @PostMapping("/post/search")
    public ApiResponse<ListPostResponse> searchPost(@RequestParam String keyword) {
        return ApiResponse.success("result", loungeService.searchPost(keyword));
    }

    @PostMapping("comment/write")
    public ApiResponse<CommentResponse> addComment(@RequestBody AddCommentRequest addCommentRequest) {
        return ApiResponse.success("result",loungeService.addComment(addCommentRequest));
    }

    @PostMapping("comment/edit")
    public ApiResponse<CommentResponse> updateComment(@RequestBody UpdateCommentRequest updateCommentRequest) {
        return ApiResponse.success("result",loungeService.updateComment(updateCommentRequest));
    }

    @PostMapping("/comment/remove")
    public ApiResponse<CommentResponse> removeComment(@RequestParam int commentId) {
        return ApiResponse.success("result",loungeService.deleteComment(commentId));
    }

    @PostMapping("/like")
    public ApiResponse<LoungeResponse> distributeLike(@RequestParam int postId) {
        return ApiResponse.success("result", loungeService.distributeLike(postId));
    }

    @PostMapping("/hot/list")
    public ApiResponse<HotPostListResponse> listHotPost() {
        return ApiResponse.success("result", loungeService.listHotPost());
    }

    @PostMapping("/hot/view")
    public ApiResponse<PostResponse> viewHotPost(@RequestParam int postId) {
        return ApiResponse.success("result", loungeService.viewHotPost(postId));
    }

    @PostMapping("/my/post")
    public ApiResponse<MyPostResponse> viewMyPost() {
        return ApiResponse.success("result",loungeService.viewMyPost());
    }

    @PostMapping("/my/comment")
    public ApiResponse<MyCommentResponse> viewMyComment() {
        return ApiResponse.success("result",loungeService.viewMyComment());
    }

    @PostMapping("/my/scrap")
    public ApiResponse<ScrapListResponse> viewMyScrap() {
        return ApiResponse.success("result",loungeService.viewMyScrap());
    }

    @PostMapping("/scrap")
    public ApiResponse<LoungeResponse> distributeScrap(@RequestParam int postId) {
        return ApiResponse.success("result",loungeService.distributeScrap(postId));
    }

}