package fr.maaxow.bringbreakfast.backend.echo;

public class EchoModel {

  private String content;

  public String getContent() {
    return content;
  }

  public EchoModel setContent(String content) {
    this.content = content;
    return this;
  }

  @Override
  public String toString() {
    return "EchoModel{" +
      "content='" + content + '\'' +
      '}';
  }
}
