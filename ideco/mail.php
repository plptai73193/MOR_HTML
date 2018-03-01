<?php

require_once 'vendor/autoload.php';

/*ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);*/

try {
    $status = sendMail();
} catch (Exception $e) {
    $status = ['status' => 'error'];
}

echo json_encode($status);

function sendMail()
{
    $transport = (new Swift_SmtpTransport('smtp.gmail.com', 465, 'ssl'))
                    ->setUsername('idecojapan@gmail.com')
                    ->setPassword('wpxbkqxqbyvhjgsw'); //smtp_password
	//email_password: ideco0209

    $mailer = new Swift_Mailer($transport);

    sendMailToAdmin($mailer);
    $result = sendMailToCustomer($mailer);

    if ($result) {
        return ['status' => 'success'];
    } else {
        return ['status' => 'error'];
    }
}

function sendMailToAdmin($mailer)
{
    $content = require('email/admin.php');

    $body = replaceEmailBody($content['body']);

    $message = new Swift_Message($content['title']);
    $message->setFrom(['info@gsm-japan.com' => 'IDECO'])
            ->setTo(['info@gsm-japan.com'])
            ->setBody($body);

    return $mailer->send($message);
}

function sendMailToCustomer($mailer)
{
    $content = require('email/customer.php');

    $body = replaceEmailBody($content['body']);

    $message = new Swift_Message($content['title']);
    $message->setFrom(['info@gsm-japan.com' => 'IDECO'])
            ->setTo([ $_POST['email'] ])
            ->setBody($body,'text/html');

    return $mailer->send($message);
}

function replaceEmailBody($body)
{
    return str_replace(
        [
            '{{INQUIRY}}',
            '{{NAME}}',
            '{{NAME_KANA}}',
            '{{COMPANY_CATEGORY}}',
            '{{CONTACT_NAME}}',
            '{{CONTACT_NAME_KANA}}',
            '{{EMAIL}}',
            '{{TELEPHONE}}',
            '{{CONSIDER}}',
            '{{QUESTION}}'
        ],
        [
            $_POST['inquiry'],
            $_POST['name'],
            $_POST['name_kana'],
            $_POST['company_category'],
            $_POST['contact_name'],
            $_POST['contact_name_kana'],
            $_POST['email'],
            $_POST['telephone'],
            $_POST['consider'],
            $_POST['question']
        ],
        $body
    );
}