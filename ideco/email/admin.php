<?php

$body = <<<BODY
お問い合わせ項目： {{INQUIRY}}
会社名 / 個人： {{NAME}}
会社名 / 個人(フリガナ)： {{NAME_KANA}}
会社業態： {{COMPANY_CATEGORY}}
担当者名 / お名前： {{CONTACT_NAME}}
担当者名 / お名前(フリガナ)： {{CONTACT_NAME_KANA}}
メールアドレス： {{EMAIL}}
TEL： {{TELEPHONE}}
検討している案件： {{CONSIDER}}
ご質問など： {{QUESTION}}
BODY;

return [
    'title' => 'idecostyle.jpからお問い合わせがありました',
    'body'  => $body
];