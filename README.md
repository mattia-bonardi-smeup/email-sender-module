# Email Sender Module

Email senders with variables substitution into html template for node.js backend app.

## Installation

```
npm install @iterout/email-sender-module
```

## Configuration

To configure correctly the email sender you can set your specified parameters like this:

```
import { createEmailTransporter, configureEmailSenderModule } from "@iterout/email-sender-module";

// create transporter configuration
const tranporter = createEmailTransporter(
  sender: string,
  password: string,
  service: EmailServices
): EmailTransporter

// setup
configureEmailSenderModule(
  emailTemplate: string,
  emailTransporters: EmailTransporter[]
)
```

## Html template

In the template directory you can put your html files. Files can contains binding varibles which will resolve during the runtime.

```
<h1>Hello, ${variable}</h1>
```

## Functions

### SendEmail

Send email with specified sender (configurated previously) to specified address using specified template. If sender isn't set will be used the first of the list.

```
import { sendEmail } from "@iterout/email-sender-module";

sendEmail(
  to: string,
  subject: string,
  templateName: string,
  variables: Map<string, string>,
  sender?: string
)
```
