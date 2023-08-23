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
    List<String> category;

    public List<ChatCategory> mapCategories() {
        if (category == null) {
            return null;
        }

        return category.stream()
            .map(ChatCategory::fromDisplayName)
            .collect(Collectors.toList());
    }
}
