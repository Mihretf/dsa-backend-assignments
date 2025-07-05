Violation in the orginal code
1. SRP
Probelm: the notification class handles all notification types including email, sms, telegram inside one class and one method, which will mix multiple responsiblities
Solution: create a separate class for each notification type, each class will have its own method for sending the notification. For example: EmailNotifiation, SMSNotification. 

2. OCP
Problem: when we want to add a new notification type, which means we have to change the exisiting send method, which violates OCP.
Soltuion: Instead of changing one big method, we make a base notification interface and create new classes for each notification type. To add a new type, we just create a new class, no need to touch the old code. 

3. LSP
Problem: the code does not allow us to swap one notification type for another easily. 
Solution: we can make all the notification classes follow the same rules so that we can replace one with another without having to break anything. For example, we can make all the notification classes implement the same interface, like all having a send method. 

4. ISP
Problem: the send function requires all kinds of contact information , which is not necessary for all notification types. For example, email notification does not need phone number.
Solution: we can make the send method in the base interface only require the necessary information for each notification

5. DIP:
Problem: the code depends on specific notification types directly, making it hard to change or test. 
Solution: we can make the code depend on the base interface, which is the general notification instead of the specific notification types. This way, the code doesn;t care about the details behind it but only about the interface.
