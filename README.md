# Email Sender Module

Email senders with variables substitution into html template for node.js backend app.

## Installation

```
npm install @iterout/email-sender-module
```

## Configuration

To configure correctly the email sender you can set your specified parameters like this:

```
import {emailSenderConfiguration} from "@iterout/email-sender-module";

emailSenderConfiguration.setTemplateDir([HTML_TEMPLATE_DIRECTORY]);
emailSenderConfiguration.configureEmailSender([EMAIL_SERVICE],[EMAIL_SENDER],[EMAIL_PASSWORD]);
```

## Html template

In the template directory you can put your html files. Files can contains binding varibles which will resolve during the runtime.

```
<h1>Hello, ${variable}</h1>
```

## Functions

### SendEmail

Send email to specified address using specified template.

```
import {sendEmail} from "@iterout/email-sender-module";

sendEmail(
  to: string, //email recipient
  subject: string, //email subject
  templateName: string, //html template
  variables: Map<string, string> //map of variables to resolve
);
```
