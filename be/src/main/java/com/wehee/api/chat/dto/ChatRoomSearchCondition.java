package com.wehee.api.chat.dto;

import com.wehee.domain.chat.entity.ChatCategory;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ChatRoomSearchCondition {
    String keyword;
    List<String> categoryList;

    public List<ChatCategory> mapCategories() {
        return categoryList.stream()
            .map(ChatCategory::valueOf)
            .collect(Collectors.toList());
    }
}
