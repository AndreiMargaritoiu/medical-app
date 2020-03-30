package utcn.ds.A1.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import utcn.ds.A1.Entity.Doctor;
import utcn.ds.A1.Service.UserService;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/me")
    public Doctor readCurrent() {
        return userService.loadCurrentUser();
    }
}
