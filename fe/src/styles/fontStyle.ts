/* Basic */
const black: React.CSSProperties = {
  fontFamily: 'Pretendard-Black',
}
const bold: React.CSSProperties = {
  fontFamily: 'Pretendard-Bold',
}
const semiBold: React.CSSProperties = {
  fontFamily: 'Pretendard-SemiBold',
}
const regular: React.CSSProperties = {
  fontFamily: 'Pretendard-Regular',
}

/* Fallback */
const FallbackTitle: React.CSSProperties = {
  fontFamily: 'Pretendard-Black',
  fontSize: '1.8rem',
  color: '#716FDC'
}

/* Social Window */
const socialWindowTitle: React.CSSProperties = {
  fontFamily: 'Pretendard-Black',
  fontSize: '1.8rem',
  color: '#303030'
}
const socialWindowSubTitle: React.CSSProperties = {
  fontSize: '1.15rem',
  color: '#303030'
}

/* addInfo */
const addInfoTitle: React.CSSProperties = {
  fontFamily: 'Pretendard-Black',
  fontSize: '1.8rem',
  color: '#716FDC'
}

/* User MyPage */
const myPageLabelTitle: React.CSSProperties = {
  fontFamily: 'Pretendard-Bold',
  fontSize: '1.15rem',
  color: '#454545'
}
const myPageLabelContent: React.CSSProperties = {
  fontSize: '1.15rem',
  color: '#303030'
}

/* BoardListItem */
const BoardListRank: React.CSSProperties = {
  fontSize: '1.15rem',
  color: '#303030',
}
const BoardListTitle: React.CSSProperties = {
  fontFamily: 'Pretendard-Regular',
  fontSize: '1.15rem',
  color: '#303030',
}
const BoardListBoldTitle: React.CSSProperties = {
  fontFamily: 'Pretendard-SemiBold',
  fontSize: '1.15rem',
  color: '#303030',
}
const BoardListPreview: React.CSSProperties = {
  fontFamily: 'Pretendard-Regular',
  color: '#303030',
  whiteSpace: 'pre-line',
}
const BoardListReaction: React.CSSProperties = {
  fontFamily: 'Pretendard-Regular',
  fontSize: '0.85rem',
  color: '#757575',
}

/* BoardView */
const BoardViewTitle: React.CSSProperties = {
  fontFamily: 'Pretendard-SemiBold',
  fontSize: '1.5rem',
  color: '#303030',
}
const BoardViewInfo: React.CSSProperties = {
  fontFamily: 'Pretendard-Regular',
  color: '#757575',
}
const BoardContent: React.CSSProperties = {
  fontFamily: 'Pretendard-Regular',
  fontSize: '1.15rem',
  color: '#303030',
  whiteSpace: 'pre-line',
}
const BoardCommentTitle: React.CSSProperties = {
  fontFamily: 'Pretendard-SemiBold',
  fontSize: '1.25rem',
  color: '#303030',
}
const BoardNickname: React.CSSProperties = {
  fontSize: '1.15rem',
  color: '#303030',
}

/*Card*/
const CardTitle: React.CSSProperties = {
  fontFamily: 'Pretendard-SemiBold',
  fontSize: '1.15rem',
  color: '#303030',
}

/*Chat*/
const ChatListContent: React.CSSProperties = {
  fontFamily: 'Pretendard-Regular',
  fontSize: '1.15rem',
  color: '#303030',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}
const ChatListInfo: React.CSSProperties = {
  fontFamily: 'Pretendard-Regular',
  color: '#606060',
  whiteSpace: 'pre-line',
}

/*Room*/
const RoomTitle: React.CSSProperties = {
  fontSize: '1.5rem',
  color: '#303030',
}
const RoomSubTitle: React.CSSProperties = {
  fontSize: '1.15rem',
  color: '#303030',
}
const RoomSubTitleBold: React.CSSProperties = {
  fontFamily:'Pretendard-Bold',
  fontSize: '1.25rem',
  color: '#757575',
}
const PeopleListContent: React.CSSProperties = {
  fontFamily: 'Pretendard-Regular',
  fontSize: '1.05rem',
  color: '#303030',
  textOverflow: 'ellipsis'
}
const RoomContentTitle: React.CSSProperties = {
  fontSize: '1.3rem',
  color: '#303030',
}

export {
  black, bold, semiBold, regular,
  FallbackTitle,
  socialWindowTitle, socialWindowSubTitle,
  addInfoTitle,
  myPageLabelTitle, myPageLabelContent,
  BoardListRank, BoardListTitle, BoardListBoldTitle, BoardListPreview, BoardListReaction,
  BoardViewTitle, BoardViewInfo, BoardContent,
  BoardCommentTitle, BoardNickname,
  CardTitle, ChatListContent, ChatListInfo,
  RoomTitle, RoomSubTitle, RoomSubTitleBold, PeopleListContent, RoomContentTitle,
};