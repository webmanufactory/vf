<?php
// Файлы phpmailer
require 'php/PHPMailer.php';
require 'php/SMTP.php';
require 'php/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера GMAIL
    $mail->Username   = 'bubunya'; // Логин на почте
    $mail->Password   = 'Mrad1da$'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('bubunya@yandex.ru', 'Аренда помещения'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('bubunya@yandex.ru');  
    $mail->addAddress('zk@videofabrika.ru'); // Ещё один, если нужен

//     // Прикрипление файлов к письму
// if (!empty($_FILES['myfile']['name'][0])) {
//     for ($ct = 0; $ct < count($_FILES['myfile']['tmp_name']); $ct++) {
//         $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['myfile']['name'][$ct]));
//         $filename = $_FILES['myfile']['name'][$ct];
//         if (move_uploaded_file($_FILES['myfile']['tmp_name'][$ct], $uploadfile)) {
//             $mail->addAttachment($uploadfile, $filename);
//         } else {
//             $msg .= 'Неудалось прикрепить файл ' . $uploadfile;
//         }
//     }   
// }

        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Аренда помещения';
        $mail->Body    = "<b>Имя:</b> $name <br>
        <b>Почта:</b> $email<br><br>
        <b>Сообщение:</b><br>$text";


// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}