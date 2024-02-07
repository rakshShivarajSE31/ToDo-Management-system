package net.javaguides.todo.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ErrorDetails {
    private LocalDateTime timeStamp;
    private String message;
    private String details;

    public ErrorDetails(String message, String details) {
        this.timeStamp = LocalDateTime.now();
        this.message = message;
        this.details = details;
    }
}