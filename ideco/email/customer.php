<?php

$body = <<<EOD
<html>
	<body>
		{{NAME}}様<br><br>

		お問合せいただき、誠にありがとうございます。<br/>
		後ほど、担当者からご連絡申し上げますので、今しばらくお待ちくださいませ。<br/>
		下記がお客様のお問い合わせ内容になります。<br/>

		--------------------------------------------<br>
		お問い合わせ項目： {{INQUIRY}}<br/>
		会社名 / 個人： {{NAME}}<br/>
		会社名 / 個人(フリガナ)： {{NAME_KANA}}<br/>
		会社業態： {{COMPANY_CATEGORY}}<br/>
		担当者名 / お名前： {{CONTACT_NAME}}<br/>
		担当者名 / お名前(フリガナ)： {{CONTACT_NAME_KANA}}<br/>
		メールアドレス： {{EMAIL}}<br/>
		TEL： {{TELEPHONE}}<br/>
		検討している案件： {{CONSIDER}}<br/>
		ご質問など： {{QUESTION}}<br/>
		--------------------------------------------<br>
		<a href="mailto:info＠gsm-japan.com">IDECO<br/>info＠gsm-japan.com</a>
	</body>
</html>
EOD;

return [
    'title' => 'お問い合わせありがとうございました　idecostyle',
    'body'  => $body
];