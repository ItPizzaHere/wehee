package com.wehee.domain.chat.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wehee.utils.MBTI;
import jakarta.persistence.AttributeConverter;
import java.io.IOException;
import java.util.List;

public class TargetMbtisConverter implements AttributeConverter<List<MBTI>, String> {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(List<MBTI> attribute) {
        try {
            return objectMapper.writeValueAsString(attribute);
        } catch (JsonProcessingException e) {
            return null;
        }
    }

    @Override
    public List<MBTI> convertToEntityAttribute(String dbData) {
        try {
            return objectMapper.readValue(dbData, new TypeReference<List<MBTI>>() {});
        } catch (IOException e) {
            return null;
        }
    }
}
