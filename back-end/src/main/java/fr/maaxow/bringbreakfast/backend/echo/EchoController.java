package fr.maaxow.bringbreakfast.backend.echo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EchoController {

  @RequestMapping("/echo")
  public EchoModel echo(@RequestParam(value = "c", defaultValue = "no content") String content) {
    return new EchoModel().setContent(content);
  }

}
