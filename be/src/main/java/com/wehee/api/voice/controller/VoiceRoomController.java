package com.wehee.api.voice.controller;

import com.wehee.api.voice.dto.VoiceRoomCreateRequestDto;
import com.wehee.api.voice.dto.VoiceRoomInfoResponseDto;
import com.wehee.api.voice.dto.VoiceRoomResponseDto;
import com.wehee.api.voice.dto.VoiceRoomSearchCondition;
import com.wehee.api.voice.dto.VoiceRoomUpdateRequestDto;
import com.wehee.common.ApiResponse;
import com.wehee.domain.voice.entity.VoiceRoom;
import com.wehee.domain.voice.exception.VoiceRoomExceedLimitException;
import com.wehee.domain.voice.service.VoiceRoomService;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/voice")
@RequiredArgsConstructor
public class VoiceRoomController {

    private final VoiceRoomService voiceRoomService;

    // 보이스룸 생성
    @PostMapping("/create")
    public ApiResponse<String> createVoiceRoom(@Valid @RequestBody VoiceRoomCreateRequestDto requestDto) {
        VoiceRoom voiceRoom;
        try {
            voiceRoom = voiceRoomService.createVoiceRoom(requestDto);
        } catch (Exception e) {
            System.out.println("voiceroom create fail");
            return ApiResponse.fail(e.getMessage());
        }
        System.out.println(voiceRoom.getId() + " room created");
        return ApiResponse.success("voiceroom", String.valueOf(voiceRoom.getId()));
    }

    // 보이스룸 상세정보
    @GetMapping("/info/{voiceroom_id}")
    public ApiResponse<VoiceRoomInfoResponseDto> describeVoiceRoomInfo(@PathVariable("voiceroom_id") String voiceRoomId) {
        VoiceRoomInfoResponseDto responseDto = voiceRoomService.describeVoiceRoomInfo(Long.valueOf(voiceRoomId));
//        System.out.println(responseDto);

        return ApiResponse.success("voiceroom", responseDto);
    }

    @GetMapping("/info/{voiceroom_id}/users")


    // 보이스룸 닫기
    @PutMapping("/close/{voiceroom_id}")
    public ApiResponse<Boolean> closeOrLeaveVoiceRoom(@PathVariable("voiceroom_id") String voiceRoomId) {
        voiceRoomService.closeOrLeaveVoiceRoom(Long.valueOf(voiceRoomId));
        return ApiResponse.success("result", true);
    }

    // 보이스룸 정보 수정
    @PutMapping("/update/{voiceroom_id}")
    public ApiResponse<VoiceRoomResponseDto> updateVoiceRoomInfo(@PathVariable("voiceroom_id") String voiceRoomId,
        @Valid @RequestBody VoiceRoomUpdateRequestDto requestDto) {
        VoiceRoomResponseDto responseDto = voiceRoomService.updateVoiceRoomInfo(Long.valueOf(voiceRoomId), requestDto);
        return ApiResponse.success("voiceroom", responseDto);
    }

    // 보이스룸 입장
    @RequestMapping("/join/{voiceroom_id}")
    public void joinVoiceRoom(@PathVariable("voiceroom_id") String voiceRoomId) {
        voiceRoomService.joinVoiceRoom(Long.valueOf(voiceRoomId));
    }


    // 보이스룸 검색
    @GetMapping("/search")
    public List<VoiceRoomResponseDto> searchByCondition(@ModelAttribute VoiceRoomSearchCondition condition) {
        return voiceRoomService.findByKeyword(condition);
    }


    //    1. 방장에게 발언자로 전환하는 요청 보내기
    //    2. 방장이 청취자의 요청을 수락하기
    //    3. 방장이 발언자를 청취자로 강등시키기
    //    4. 스스로 청취자로 전환하기

    /*
    @PostMapping("/request-speaker/{voiceroom_id}")
    public ResponseEntity<String> requestSpeaker(@PathVariable("voiceroom_id") String voiceRoomId) {
        // 해당 방의 방장에게 발표자 전환을 요청하는 로직
        return ResponseEntity.ok("Speaker request sent to owner");
    }

    @PostMapping("/accept-request/{voiceroom_id}/{listenerId}")
    public ResponseEntity<String> acceptRequest(@PathVariable("voiceroom_id") String voiceRoomId, @PathVariable Long listenerId) {
        // 요청 목록에서 listenerId에 해당하는 청취자의 요청을 식별 후 수락하는 로직

        return ResponseEntity.ok("Listener request accepted");
    }


    @PostMapping("/convert-to-listener/{roomId}/{userId}")
    public ApiResponse<?> convertToListener(@PathVariable Long roomId, @PathVariable Long userId) {
        // 해당 방의 발언자 목록 중 userId를 식별하여 청취자로 전환하는 로직

        return ApiResponse.success("", );
    }

    @PostMapping("/convert-to-listener/{roomId}")
    public ApiResponse<?> convertToListener(@PathVariable Long roomId) {
        // 발언자가 스스로 청취자로 전환하는 로직

        return ApiResponse.success("", );
    }

*/
    //


}
