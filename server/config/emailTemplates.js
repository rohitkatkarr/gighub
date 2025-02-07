
export const EMAIL_VERIFY_TEMPLATE = `<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<noscript>
         <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
      </noscript>
<![endif]-->
    <!--[if mso]><xml>
    <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
      <w:DontUseAdvancedTypographyReadingMail/>
    </w:WordDocument>
    </xml><![endif]-->
  </head>
  <body class="body">
    <div dir="ltr" class="es-wrapper-color">
      <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#fafafa"></v:fill>
			</v:background>
		<![endif]-->
      <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper">
        <tbody>
          <tr>
            <td valign="top" class="esd-email-paddings">
              <table cellpadding="0" cellspacing="0" align="center" class="es-header">
                <tbody>
                  <tr>
                    <td align="center" class="es-adaptive esd-stripe">
                      <table width="600" cellspacing="0" cellpadding="0" bgcolor="#3d5ca3" align="center" class="es-header-body" style="background-color:rgb(61, 92, 163)">
                        <tbody>
                          <tr>
                            <td bgcolor="#015fc9" align="left" class="esd-structure es-p20t es-p20b es-p20r es-p20l" style="background-color:#015fc9">
                              <table cellspacing="0" cellpadding="0" align="right" class="es-right">
                                <tbody>
                                  <tr>
                                    <td width="560" align="left" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image es-m-p0l es-m-txt-c" style="font-size:0">
                                              <a href="https://gighub.com" target="_blank">
                                                <img src="https://etesrgt.stripocdn.email/content/guids/c80ff3db-851b-4524-8ed3-e0c231f57a39/images/2_14Z.png" alt="Gighub" width="203" title="Gighub" class="adapt-img" style="display:block;border-radius:0">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-content">
                <tbody>
                  <tr>
                    <td bgcolor="#fafafa" align="center" class="esd-stripe" style="background-color:rgb(250, 250, 250)">
                      <table esd-img-prev-src width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body" style="background-color:rgb(255, 255, 255)">
                        <tbody>
                          <tr>
                            <td esd-img-prev-src="https://fkus.stripocdn.email/content/guids/CABINET_8a8240f4650bd716d3cd69675fe184ca/images/1041555765740937.png" esd-img-prev-position="left top" esd-img-prev-repeat="no-repeat" bgcolor="transparent" align="left" class="esd-structure es-p40t es-p20r es-p20l" style="background-color:transparent;background-position:left top">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="esd-container-frame">
                                      <table esd-img-prev-src esd-img-prev-position="left top" width="100%" cellspacing="0" cellpadding="0" style="background-position:left top">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image es-p5t es-p5b" style="font-size:0">
                                              <a target="_blank">
                                                <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?t=st=1738893371~exp=1738896971~hmac=4464b267f1a54bc5817547c9b2e9e23a63fdaaa275a5abd31f38feaad373bde9&w=740" alt="" width="260" class="adapt-img" style="display: block">
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p15t es-p15b">
                                              <h1 style="color:#333333;font-size:20px">
                                                Verify Your Account
                                              </h1>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="left" class="esd-block-text es-p40r es-p40l">
                                              <p style="text-align:center">
                                                HI,&nbsp;{{email}}
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="left" class="esd-block-text es-p35r es-p40l">
                                              <p style="text-align:center">
                                                To Finalize your account with <span style="color: #0b5394">Gighub</span>, Kindly refer to below otp!
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                          <td align="center" class="esd-block-button es-p40t es-p40b es-p10r es-p10l">
                                            <span class="es-button-border">
                                                {{otp}}
                                            </span>
                                          </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td esd-img-prev-src esd-img-prev-position="center center" align="left" class="esd-structure es-p20t es-p10r es-p10l" style="background-position:center center">
                              <!--[if mso]><table width="580" cellpadding="0" cellspacing="0"><tr><td width="199" valign="top"><![endif]-->
                              <table cellspacing="0" cellpadding="0" align="left" class="es-left">
                                <tbody>
                                  <tr>
                                    <td width="199" align="left" class="esd-container-frame">
                                      <table esd-img-prev-src esd-img-prev-position="center center" width="100%" cellspacing="0" cellpadding="0" style="background-position:center center">
                                        <tbody>
                                          <tr>
                                            <td align="right" class="esd-block-text es-p15t">
                                              <p class="es-m-txt-c" style="font-size:16px;color:#666666">
                                                <strong>Follow us:</strong>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="20"></td><td width="361" valign="top"><![endif]-->
                              <table cellspacing="0" cellpadding="0" align="right" class="es-right">
                                <tbody>
                                  <tr>
                                    <td width="361" align="left" class="esd-container-frame">
                                      <table esd-img-prev-src esd-img-prev-position="center center" width="100%" cellspacing="0" cellpadding="0" style="background-position:center center">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-social es-p10t es-p5b es-m-txt-c" style="font-size:0">
                                              <table cellspacing="0" cellpadding="0" class="es-table-not-adapt es-social">
                                                <tbody>
                                                  <tr>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img src="https://etesrgt.stripocdn.email/content/assets/img/social-icons/rounded-gray/facebook-rounded-gray.png" alt="Fb" title="Facebook" width="32">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img src="https://etesrgt.stripocdn.email/content/assets/img/social-icons/rounded-gray/x-rounded-gray.png" alt="X" title="X" width="32">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img src="https://etesrgt.stripocdn.email/content/assets/img/social-icons/rounded-gray/instagram-rounded-gray.png" alt="Ig" title="Instagram" width="32">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img src="https://etesrgt.stripocdn.email/content/assets/img/social-icons/rounded-gray/youtube-rounded-gray.png" alt="Yt" title="Youtube" width="32">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img src="https://etesrgt.stripocdn.email/content/assets/img/social-icons/rounded-gray/linkedin-rounded-gray.png" alt="In" title="Linkedin" width="32">
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                          <tr>
                            <td esd-img-prev-src esd-img-prev-position="left top" align="left" class="esd-structure es-p5t es-p20b es-p20r es-p20l" style="background-position:left top">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td esd-links-color="#666666" align="center" class="esd-block-text">
                                              <p style="font-size:14px">
                                                Contact us: <a target="_blank" href="tel:123456789" style="font-size:14px;color:#666666">123456789</a> | info<a target="_blank" href="mailto:your@mail.com" style="font-size:14px;color:#666666">@gighub.com</a>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-footer">
                <tbody>
                  <tr>
                    <td bgcolor="#fafafa" align="center" class="esd-stripe" style="background-color:rgb(250, 250, 250)">
                      <table esd-img-prev-src width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-footer-body">
                        <tbody>
                          <tr>
                            <td esd-img-prev-src esd-img-prev-position="left top" bgcolor="#015fc9" align="left" class="esd-structure es-p10t es-p30b es-p20r es-p20l" style="background-color:#015fc9;background-position:left top">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-text es-p5t es-p5b">
                                              <h2 style="font-size:16px;color:#ffffff">
                                                <strong>Have questions?</strong>
                                              </h2>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td esd-links-underline="none" esd-links-color="#ffffff" align="left" class="esd-block-text es-p5b">
                                              <p style="font-size:14px;color:#ffffff">
                                                We are here to help, learn more about us <a target="_blank" style="font-size:14px;color:#ffffff;text-decoration:none">here</a>
                                              </p>
                                              <p style="font-size:14px;color:#ffffff">
                                                or <a target="_blank" style="font-size:14px;text-decoration:none;color:#ffffff">contact us</a><br>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-content">
                <tbody>
                  <tr>
                    <td bgcolor="#fafafa" align="center" class="esd-stripe" style="background-color:rgb(250, 250, 250)">
                      <table esd-img-prev-src width="600" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center" class="es-content-body" style="background-color:transparent">
                        <tbody>
                          <tr>
                            <td esd-img-prev-src esd-img-prev-position="left top" align="left" class="esd-structure es-p15t" style="background-position:left top">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="600" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td class="esd-block-menu">
                                              <table width="100%" cellspacing="0" cellpadding="0" class="es-menu">
                                                <tbody>
                                                  <tr>
                                                    <td id="esd-menu-id-0" width="33.33%" valign="top" bgcolor="transparent" align="center" class="es-p10t es-p10b es-p5r es-p5l esd-block-menu-item" style="padding-bottom:1px;padding-top:0px">
                                                      <div>
                                                        <a target="_blank" href="https://viewstripo.email" style="color:#3D5CA3;font-size:14px">
                                                          Sing up
                                                        </a>
                                                      </div>
                                                    </td>
                                                    <td id="esd-menu-id-1" esdev-border-color="#3d5ca3" esdev-border-style="solid" width="33.33%" valign="top" bgcolor="transparent" align="center" class="es-p10t es-p10b es-p5r es-p5l esd-block-menu-item" style="border-left:1px solid #3d5ca3;padding-bottom:1px;padding-top:0px">
                                                      <div>
                                                        <a target="_blank" href="https://viewstripo.email" style="color:#3D5CA3;font-size:14px">
                                                          Blog
                                                        </a>
                                                      </div>
                                                    </td>
                                                    <td id="esd-menu-id-2" esdev-border-color="#3d5ca3" esdev-border-style="solid" width="33.33%" valign="top" bgcolor="transparent" align="center" class="es-p10t es-p10b es-p5r es-p5l esd-block-menu-item" style="border-left:1px solid #3d5ca3;padding-bottom:1px;padding-top:0px">
                                                      <div>
                                                        <a target="_blank" href="https://viewstripo.email" style="color:#3D5CA3;font-size:14px">
                                                          About us
                                                        </a>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-spacer es-p20b es-p20r es-p20l" style="font-size:0">
                                              <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="border-bottom:1px solid rgb(250, 250, 250);background:none;height:0px;width:100%;margin:0px"></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-footer">
                <tbody>
                  <tr>
                    <td bgcolor="#fafafa" align="center" class="esd-stripe" style="background-color:rgb(250, 250, 250)">
                      <table esd-img-prev-src width="600" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center" class="es-footer-body" style="background-color:transparent">
                        <tbody>
                          <tr>
                            <td align="left" esd-img-prev-src class="esd-structure es-p15t es-p5b es-p20r es-p20l">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td esd-links-underline="underline" align="center" class="esd-block-text">
                                              <p style="font-size:12px;color:#666666">
                                                This daily newsletter was sent to info@gighub.com from company name because you subscribed. If you would not like to receive this email <a target="_blank" class="unsubscribe" style="font-size:12px;text-decoration:underline">unsubscribe here</a>.
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-content esd-footer-popover">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table esd-img-prev-src width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body" style="background-color:transparent">
                        <tbody>
                          <tr>
                            <td esd-img-prev-src align="left" class="esd-structure es-p30t es-p30b es-p20r es-p20l">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image es-infoblock made_with" style="font-size:0">
                                              <a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=education&utm_content=trigger_newsletter2">
                                                <img src="https://etesrgt.stripocdn.email/content/guids/cab_pub_7cbbc409ec990f19c78c75bd1e06f215/images/78411525331495932.png" alt="" width="125" style="display:block">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>`

export const PASSWORD_RESET_TEMPLATE = `<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<noscript>
         <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
      </noscript>
<![endif]-->
    <!--[if mso]><xml>
    <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
      <w:DontUseAdvancedTypographyReadingMail/>
    </w:WordDocument>
    </xml><![endif]-->
  </head>
  <body class="body">
    <div dir="ltr" class="es-wrapper-color">
      <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#fafafa"></v:fill>
			</v:background>
		<![endif]-->
      <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper">
        <tbody>
          <tr>
            <td valign="top" class="esd-email-paddings">
              <table cellpadding="0" cellspacing="0" align="center" class="es-header">
                <tbody>
                  <tr>
                    <td align="center" class="es-adaptive esd-stripe">
                      <table width="600" cellspacing="0" cellpadding="0" bgcolor="#3d5ca3" align="center" class="es-header-body" style="background-color:rgb(61, 92, 163)">
                        <tbody>
                          <tr>
                            <td bgcolor="#015fc9" align="left" class="esd-structure es-p20t es-p20b es-p20r es-p20l" style="background-color:#015fc9">
                              <table cellspacing="0" cellpadding="0" align="right" class="es-right">
                                <tbody>
                                  <tr>
                                    <td width="560" align="left" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image es-m-p0l es-m-txt-c" style="font-size:0">
                                              <a href="https://gighub.com" target="_blank">
                                                <img src="https://etesrgt.stripocdn.email/content/guids/c80ff3db-851b-4524-8ed3-e0c231f57a39/images/2_14Z.png" alt="Gighub" width="203" title="Gighub" class="adapt-img" style="display:block;border-radius:0">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-content">
                <tbody>
                  <tr>
                    <td bgcolor="#fafafa" align="center" class="esd-stripe" style="background-color:rgb(250, 250, 250)">
                      <table esd-img-prev-src width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body" style="background-color:rgb(255, 255, 255)">
                        <tbody>
                          <tr>
                            <td esd-img-prev-src="https://fkus.stripocdn.email/content/guids/CABINET_8a8240f4650bd716d3cd69675fe184ca/images/1041555765740937.png" esd-img-prev-position="left top" esd-img-prev-repeat="no-repeat" bgcolor="transparent" align="left" class="esd-structure es-p40t es-p20r es-p20l" style="background-color:transparent;background-position:left top">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="esd-container-frame">
                                      <table esd-img-prev-src esd-img-prev-position="left top" width="100%" cellspacing="0" cellpadding="0" style="background-position:left top">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image es-p5t es-p5b" style="font-size:0">
                                              <a target="_blank">
                                                <img src="https://etesrgt.stripocdn.email/content/guids/CABINET_dd354a98a803b60e2f0411e893c82f56/images/23891556799905703.png" alt="" width="110" style="display:block">
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p15t es-p15b">
                                              <h1 style="color:#333333;font-size:20px">
                                                <strong>FORGOT YOUR </strong>
                                              </h1>
                                              <h1 style="color:#333333;font-size:20px">
                                                <strong>&nbsp;PASSWORD?</strong>
                                              </h1>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="left" class="esd-block-text es-p40r es-p40l">
                                              <p style="text-align:center">
                                                HI,&nbsp;{{email}}
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="left" class="esd-block-text es-p35r es-p40l">
                                              <p style="text-align:center">
                                                There was a request to change your password!
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-button es-p40t es-p40b es-p10r es-p10l">
                                              <span class="es-button-border">
                                                {{otp}}
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td esd-img-prev-src esd-img-prev-position="center center" align="left" class="esd-structure es-p20t es-p10r es-p10l" style="background-position:center center">
                              <!--[if mso]><table width="580" cellpadding="0" cellspacing="0"><tr><td width="199" valign="top"><![endif]-->
                              <table cellspacing="0" cellpadding="0" align="left" class="es-left">
                                <tbody>
                                  <tr>
                                    <td width="199" align="left" class="esd-container-frame">
                                      <table esd-img-prev-src esd-img-prev-position="center center" width="100%" cellspacing="0" cellpadding="0" style="background-position:center center">
                                        <tbody>
                                          <tr>
                                            <td align="right" class="esd-block-text es-p15t">
                                              <p class="es-m-txt-c" style="font-size:16px;color:#666666">
                                                <strong>Follow us:</strong>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="20"></td><td width="361" valign="top"><![endif]-->
                              <table cellspacing="0" cellpadding="0" align="right" class="es-right">
                                <tbody>
                                  <tr>
                                    <td width="361" align="left" class="esd-container-frame">
                                      <table esd-img-prev-src esd-img-prev-position="center center" width="100%" cellspacing="0" cellpadding="0" style="background-position:center center">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-social es-p10t es-p5b es-m-txt-c" style="font-size:0">
                                              <table cellspacing="0" cellpadding="0" class="es-table-not-adapt es-social">
                                                <tbody>
                                                  <tr>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img src="https://etesrgt.stripocdn.email/content/assets/img/social-icons/rounded-gray/facebook-rounded-gray.png" alt="Fb" title="Facebook" width="32">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img src="https://etesrgt.stripocdn.email/content/assets/img/social-icons/rounded-gray/x-rounded-gray.png" alt="X" title="X" width="32">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img src="https://etesrgt.stripocdn.email/content/assets/img/social-icons/rounded-gray/instagram-rounded-gray.png" alt="Ig" title="Instagram" width="32">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img src="https://etesrgt.stripocdn.email/content/assets/img/social-icons/rounded-gray/youtube-rounded-gray.png" alt="Yt" title="Youtube" width="32">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="">
                                                        <img src="https://etesrgt.stripocdn.email/content/assets/img/social-icons/rounded-gray/linkedin-rounded-gray.png" alt="In" title="Linkedin" width="32">
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                          <tr>
                            <td esd-img-prev-src esd-img-prev-position="left top" align="left" class="esd-structure es-p5t es-p20b es-p20r es-p20l" style="background-position:left top">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td esd-links-color="#666666" align="center" class="esd-block-text">
                                              <p style="font-size:14px">
                                                Contact us: <a target="_blank" href="tel:123456789" style="font-size:14px;color:#666666">123456789</a> | info<a target="_blank" href="mailto:your@mail.com" style="font-size:14px;color:#666666">@gighub.com</a>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-footer">
                <tbody>
                  <tr>
                    <td bgcolor="#fafafa" align="center" class="esd-stripe" style="background-color:rgb(250, 250, 250)">
                      <table esd-img-prev-src width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-footer-body">
                        <tbody>
                          <tr>
                            <td esd-img-prev-src esd-img-prev-position="left top" bgcolor="#015fc9" align="left" class="esd-structure es-p10t es-p30b es-p20r es-p20l" style="background-color:#015fc9;background-position:left top">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-text es-p5t es-p5b">
                                              <h2 style="font-size:16px;color:#ffffff">
                                                <strong>Have questions?</strong>
                                              </h2>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td esd-links-underline="none" esd-links-color="#ffffff" align="left" class="esd-block-text es-p5b">
                                              <p style="font-size:14px;color:#ffffff">
                                                We are here to help, learn more about us <a target="_blank" style="font-size:14px;color:#ffffff;text-decoration:none">here</a>
                                              </p>
                                              <p style="font-size:14px;color:#ffffff">
                                                or <a target="_blank" style="font-size:14px;text-decoration:none;color:#ffffff">contact us</a><br>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-content">
                <tbody>
                  <tr>
                    <td bgcolor="#fafafa" align="center" class="esd-stripe" style="background-color:rgb(250, 250, 250)">
                      <table esd-img-prev-src width="600" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center" class="es-content-body" style="background-color:transparent">
                        <tbody>
                          <tr>
                            <td esd-img-prev-src esd-img-prev-position="left top" align="left" class="esd-structure es-p15t" style="background-position:left top">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="600" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td class="esd-block-menu">
                                              <table width="100%" cellspacing="0" cellpadding="0" class="es-menu">
                                                <tbody>
                                                  <tr>
                                                    <td id="esd-menu-id-0" width="33.33%" valign="top" bgcolor="transparent" align="center" class="es-p10t es-p10b es-p5r es-p5l esd-block-menu-item" style="padding-bottom:1px;padding-top:0px">
                                                      <div>
                                                        <a target="_blank" href="https://viewstripo.email" style="color:#3D5CA3;font-size:14px">
                                                          Sing up
                                                        </a>
                                                      </div>
                                                    </td>
                                                    <td id="esd-menu-id-1" esdev-border-color="#3d5ca3" esdev-border-style="solid" width="33.33%" valign="top" bgcolor="transparent" align="center" class="es-p10t es-p10b es-p5r es-p5l esd-block-menu-item" style="border-left:1px solid #3d5ca3;padding-bottom:1px;padding-top:0px">
                                                      <div>
                                                        <a target="_blank" href="https://viewstripo.email" style="color:#3D5CA3;font-size:14px">
                                                          Blog
                                                        </a>
                                                      </div>
                                                    </td>
                                                    <td id="esd-menu-id-2" esdev-border-color="#3d5ca3" esdev-border-style="solid" width="33.33%" valign="top" bgcolor="transparent" align="center" class="es-p10t es-p10b es-p5r es-p5l esd-block-menu-item" style="border-left:1px solid #3d5ca3;padding-bottom:1px;padding-top:0px">
                                                      <div>
                                                        <a target="_blank" href="https://viewstripo.email" style="color:#3D5CA3;font-size:14px">
                                                          About us
                                                        </a>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-spacer es-p20b es-p20r es-p20l" style="font-size:0">
                                              <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="border-bottom:1px solid rgb(250, 250, 250);background:none;height:0px;width:100%;margin:0px"></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-footer">
                <tbody>
                  <tr>
                    <td bgcolor="#fafafa" align="center" class="esd-stripe" style="background-color:rgb(250, 250, 250)">
                      <table esd-img-prev-src width="600" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center" class="es-footer-body" style="background-color:transparent">
                        <tbody>
                          <tr>
                            <td align="left" esd-img-prev-src class="esd-structure es-p15t es-p5b es-p20r es-p20l">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td esd-links-underline="underline" align="center" class="esd-block-text">
                                              <p style="font-size:12px;color:#666666">
                                                This daily newsletter was sent to info@gighub.com from company name because you subscribed. If you would not like to receive this email <a target="_blank" class="unsubscribe" style="font-size:12px;text-decoration:underline">unsubscribe here</a>.
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-content esd-footer-popover">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table esd-img-prev-src width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body" style="background-color:transparent">
                        <tbody>
                          <tr>
                            <td esd-img-prev-src align="left" class="esd-structure es-p30t es-p30b es-p20r es-p20l">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image es-infoblock made_with" style="font-size:0">
                                              <a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=education&utm_content=trigger_newsletter2">
                                                <img src="https://etesrgt.stripocdn.email/content/guids/cab_pub_7cbbc409ec990f19c78c75bd1e06f215/images/78411525331495932.png" alt="" width="125" style="display:block">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>`