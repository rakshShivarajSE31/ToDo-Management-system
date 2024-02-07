////package net.javaguides.todo.exception;
////
////import lombok.AllArgsConstructor;
////import lombok.Getter;
////import org.springframework.http.HttpStatus;
////
////@Getter
////@AllArgsConstructor
////public class TodoAPIException extends RuntimeException{
////    private HttpStatus status;
////    private String message;
////
////    public TodoAPIException(HttpStatus status, String message, Throwable cause) {
////        super(message, cause);
////        this.status = status;
////        this.message = message;
////    }
////}
//
//
//package net.javaguides.todo.exception;
//
//import lombok.Getter;
//import org.springframework.http.HttpStatus;
//
//@Getter
//public class TodoAPIException extends RuntimeException {
//    private HttpStatus status;
//    private String message;
//
//    public TodoAPIException(HttpStatus status, String message, Throwable cause) {
//        super(message, cause);
//        this.status = status;
//        this.message = message;
//    }
//}


package net.javaguides.todo.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter

public class TodoAPIException extends RuntimeException {
    private HttpStatus status;
    private String message;

    // Remove the third parameter from this constructor
    public TodoAPIException(HttpStatus status, String message) {
        super(message);
        this.status = status;
        this.message = message;
    }

    // Keep the existing constructor if needed for other use cases
    public TodoAPIException(HttpStatus status, String message, Throwable cause) {
        super(message, cause);
        this.status = status;
        this.message = message;
    }
}
