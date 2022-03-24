# Email Sender Module

Email senders with html template engine for node.js backend app.

## Installation

```
npm install @iterout/email-sender-module
```

## Configuration

Create one or multiple `EmailConfig` to associate email creadential and templates directories. The template search priority is set according to the folder order. The module also provides an utility to create the configuration (`createEmailConfig()`)

```
import { createEmailConfig } from "@iterout/email-sender-module";

const emailConfig: EmailConfig = createEmailConfig(
  emailTemplatesDirectories: [LIST_OF_DRECTORIES_PATH],
  sender: [EMAIL_SENDER],
  password: [EMAIL_SENDER_PASSWORD],
  service: [EMAIL_SERVICE]
)
```

## Html template

In the template directory you can put your html files. Files can contains binding varibles which will resolve during the runtime.

```
<h1>Hello, ${variable}</h1>
```

## Functions

### SendEmail

Send email with specified `EmailConfig` to specified address using specified template.

```
import { sendEmail } from "@iterout/email-sender-module";

sendEmail(
  config: [EMAIL_CONFIG],
  to: [RECIPIENT],
  subject: [SUBJECT],
  templateName: [NAME_OF_HTML_TEMPLATE],
  variables: [VARIABLES]
)
```
