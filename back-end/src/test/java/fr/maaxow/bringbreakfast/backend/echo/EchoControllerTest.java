package fr.maaxow.bringbreakfast.backend.echo;

import fr.maaxow.bringbreakfast.backend.AbstractTest;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.Assert.assertEquals;

public class EchoControllerTest extends AbstractTest {

  @Before
  public void before() {
    super.setUp();
  }

  @Test
  public void getProductsList() throws Exception {
    String uri = "/echo?c=foobar";
    MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
      .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

    int status = mvcResult.getResponse().getStatus();
    assertEquals(200, status);
    String content = mvcResult.getResponse().getContentAsString();

    EchoModel resultAsModel = mapFromJson(content, EchoModel.class);

    System.out.println(resultAsModel);

    assertEquals("foobar", resultAsModel.getContent());

  }

}
