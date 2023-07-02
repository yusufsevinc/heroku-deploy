package backend;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/user")
public class Cont {

    @GetMapping
    public ResponseData get(){
        ResponseData responseData = new ResponseData();
        responseData.setName("yusuf");
        responseData.setSurname("sevinç");
        return responseData;
    }
}
