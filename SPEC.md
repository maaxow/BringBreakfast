## Context

In France, there is a tradition. Each Friday (for example), someone bring breakfast for the team. But with a big team, the management to pick (semi-)random a person to bring the breakfast, it's a hard task.

# Specifications

There are notions of Member and Team.

### Member
A member can access to the app via a login page.

* He can access to his member page, and can update his informations. (Names, e-mail, password)
* He can consult his subscribed Teams, and unsubscribe a Team.
* He can create a Team, (so he become the administrator of this team)
* He can manage his Team(s) :
  * He can update the name of the Team
  * He can define/update the periodicity of the breakfast
  * He can invite Member via e-mail, or remove Member

### Team

On Team page, it show (in big ?) the next breakfast date, and who bring it (like a message like : "{{name}} offer you a breakfast next friday !!"). 
Under this message, there is a table with all breakfasts dates and member linked.
