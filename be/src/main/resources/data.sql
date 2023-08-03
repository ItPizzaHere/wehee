insert into MBTI values (0,'ENFJ'), (1,'ENFP'), (2,'ENFJ'), (3,'ENFP'), (4,'ESFJ'), (5,'ESFP'),
                        (6,'ESTJ'), (7,'ESTP'), (8,'INFJ'), (9,'INFP'), (10,'INTJ'),
                        (11,'INTP'), (12,'ISFJ'), (13,'ISFP'), (14,'ISTJ'), (15,'ISTP');

insert into user (user_id,nickname,user_mbti_id,birth,gender,provider,provider_id)
values(0,'탈퇴한 사용자',0,2023,'X','X','X');
update user set user_id=0 where user_mbti_id=0;

# user 0번은 탈퇴한 사용자