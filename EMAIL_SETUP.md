# Wash Rights Network - Email System Setup

## ✅ Completed Setup

### 1. **Mailbox Created**
- **Email**: contact@washrights.org
- **Password**: `WashRights2025!` (please change this)
- **Quota**: 100MB
- **Location**: `/etc/dovecot/users`
- **Status**: ✅ Active

### 2. **Branded Email Template**
- **Location**: `/var/www/email-templates/washrights.html`
- **Theme**: Blue/aqua water theme with 💧 icon
- **Design**: Professional responsive HTML
- **Placeholders**: {{SUBJECT}} and {{CONTENT}}

### 3. **DKIM Signing Configured**
- **Private Key**: `/etc/postfix/dkim/washrights.org.rsa.key`
- **Public Key**: `/etc/postfix/dkim/washrights.org.public.key`
- **Selector**: `mail`
- **Status**: ✅ Ready

### 4. **SMTP Server**
- **Host**: localhost:25 (Postfix)
- **Authentication**: Not required for local sending
- **DKIM**: Automatic signing enabled

---

## 📋 REQUIRED DNS RECORDS

### You MUST add these DNS records to your domain registrar/Cloudflare:

### 1. **MX Record** (Mail Exchange)
```
Type: MX
Name: @
Priority: 10
Value: mail.washrights.org
TTL: 3600
```

### 2. **A Record** (for mail subdomain)
```
Type: A
Name: mail
Value: 69.57.161.134
TTL: 3600
```

### 3. **DKIM Record** (Email Authentication)
```
Type: TXT
Name: mail._domainkey
Value: v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhmJks+lp1dbnQfnoce+vBHifuzOXVLEJ+zuJqNNuz1HceCtx3oJLx6vwuGmypI8v8POJuqKoCfIrpTnP2fxxdIDQm6bjpEBNei1vxLpkwOm1oRjxz24GYmyzitlFCXpAST9Inka8vPMw8TSEQgMbi1dS3Vzq0P8rCGxw2L/BqogBsZgw5iKyFi+lyJqRV2rN+SVmAYd8EP6Zecef7EIuCnHshsj6rN3sosG7Zbs2g8HjAPcUAwFinUUoT675qHXDztlbQxKkkD5TaYdRqVj5kBGYXy5LawM7TbBG01FV1ytqSB6V6+m9gL1QBvIJApITgIi1M527d0jEG/VBqlhYvwIDAQAB
TTL: 3600
```

### 4. **SPF Record** (Sender Policy Framework)
```
Type: TXT
Name: @
Value: v=spf1 mx a ip4:69.57.161.134 ~all
TTL: 3600
```

### 5. **DMARC Record** (Email Security Policy)
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:contact@washrights.org; ruf=mailto:contact@washrights.org; fo=1
TTL: 3600
```

---

## 🚀 How to Send Emails

### Method 1: Using the Python Script (Recommended)

```bash
/usr/local/bin/send-branded-email.py \
  'washrights.org' \
  'contact@washrights.org' \
  'Wash Rights Network' \
  'recipient@example.com' \
  'Your Subject Line' \
  '<h2>Your heading</h2><p>Your email content in HTML</p>'
```

### Method 2: Test Email

```bash
# Simple test
echo "Test email body" | mail -s "Test Subject" \
  -a "From: contact@washrights.org" \
  recipient@example.com
```

### Method 3: From Application

Create an email service similar to other apps:

```javascript
const { execSync } = require('child_process');

function sendEmail({ to, subject, content }) {
  // Read template
  const template = fs.readFileSync('/var/www/email-templates/washrights.html', 'utf8');

  // Replace placeholders
  const html = template
    .replace('{{SUBJECT}}', subject)
    .replace('{{CONTENT}}', content);

  // Send via script
  const cmd = `/usr/local/bin/send-branded-email.py \
    'washrights.org' \
    'contact@washrights.org' \
    'Wash Rights Network' \
    '${to}' \
    '${subject}' \
    '${html.replace(/'/g, "'\\''")}' \
  `;

  execSync(cmd);
}
```

---

## 📧 Email Login Details

### Webmail Access (Roundcube/SOGo - if installed)
- **URL**: https://mail.washrights.org (needs to be set up separately)
- **Username**: contact@washrights.org
- **Password**: WashRights2025!

### IMAP Settings (for Outlook, Thunderbird, etc.)
- **Server**: mail.washrights.org
- **Port**: 993 (SSL) or 143 (STARTTLS)
- **Username**: contact@washrights.org
- **Password**: WashRights2025!
- **Encryption**: SSL/TLS

### SMTP Settings (for sending)
- **Server**: mail.washrights.org
- **Port**: 587 (STARTTLS) or 465 (SSL)
- **Username**: contact@washrights.org
- **Password**: WashRights2025!
- **Encryption**: STARTTLS or SSL/TLS

---

## ✅ Testing Checklist

### After adding DNS records (wait 1-24 hours for propagation):

1. **Test DNS Resolution**
   ```bash
   dig MX washrights.org
   dig TXT mail._domainkey.washrights.org
   dig TXT _dmarc.washrights.org
   ```

2. **Test DKIM Signing**
   ```bash
   /usr/local/bin/send-branded-email.py \
     'washrights.org' \
     'contact@washrights.org' \
     'Wash Rights Network' \
     'your-personal-email@gmail.com' \
     'Test Email' \
     '<h2>Hello!</h2><p>This is a test email from Wash Rights Network.</p>'
   ```

3. **Check Email Headers**
   - Send test email to yourself
   - View email source/headers
   - Verify DKIM signature is present
   - Check "DKIM: PASS" in headers

4. **Test Email Deliverability**
   - Send to Gmail: https://mail-tester.com/
   - Check spam score
   - Should get 8/10 or higher

---

## 🔧 Key File Locations

### Configuration Files
- **Mailbox**: `/etc/dovecot/users` (line: contact@washrights.org)
- **Email Template**: `/var/www/email-templates/washrights.html`
- **DKIM Private Key**: `/etc/postfix/dkim/washrights.org.rsa.key`
- **DKIM Public Key**: `/etc/postfix/dkim/washrights.org.public.key`
- **Send Script**: `/usr/local/bin/send-branded-email.py`

### Logs
- **Mail Log**: `journalctl -u postfix -f`
- **Dovecot Log**: `journalctl -u dovecot -f`

---

## 🛠️ Maintenance

### Change Password
```bash
# Generate new password hash
doveadm pw -s SHA512-CRYPT -p "YourNewPassword"

# Update /etc/dovecot/users with new hash
nano /etc/dovecot/users

# Reload dovecot
systemctl reload dovecot
```

### Check Mailbox Usage
```bash
doveadm quota get -u contact@washrights.org
```

### View Recent Emails
```bash
# Check mail logs
tail -f /var/log/maillog

# Or with journalctl
journalctl -u postfix -n 50
```

---

## 🎨 Email Template Customization

The branded template is located at `/var/www/email-templates/washrights.html`

**Current Design:**
- 💧 Water droplet icon
- Blue gradient header (#0284c7 to #0ea5e9)
- Professional footer with contact info
- Responsive design for mobile devices

To customize:
1. Edit `/var/www/email-templates/washrights.html`
2. Keep `{{SUBJECT}}` and `{{CONTENT}}` placeholders
3. Test changes by sending a test email

---

## 📊 Email Statistics

| Item | Value |
|------|-------|
| Mailbox | contact@washrights.org |
| Quota | 100MB |
| Template | ✅ Created |
| DKIM | ✅ Configured |
| DNS Records | ⏳ Pending (user must add) |

---

## ⚠️ Important Notes

1. **DNS Propagation**: After adding DNS records, wait 1-24 hours for full propagation
2. **Password Security**: Change the default password immediately
3. **Backup**: DKIM keys are stored in `/etc/postfix/dkim/` - back them up
4. **Testing**: Always test emails after DNS changes
5. **Spam Prevention**: Proper DNS records (SPF, DKIM, DMARC) prevent emails from going to spam

---

## 🆘 Troubleshooting

### Emails not sending?
```bash
# Check postfix status
systemctl status postfix

# Check recent errors
journalctl -u postfix -n 50
```

### Emails going to spam?
- Verify all DNS records are added correctly
- Check DKIM signature is present in email headers
- Test at https://mail-tester.com/

### Can't login to mailbox?
```bash
# Test authentication
doveadm auth test contact@washrights.org WashRights2025!

# Check dovecot status
systemctl status dovecot
```

---

## 📞 Support

For technical issues:
- **Server Admin**: Check logs with `journalctl -u postfix -u dovecot`
- **DNS Issues**: Verify records at https://dnschecker.org/
- **DKIM Testing**: https://dkimvalidator.com/

---

**Setup Complete!** 🎉

Your email system is configured and ready. Just add the DNS records above to start sending/receiving emails.

---

## Quick Reference

**Send Test Email:**
```bash
/usr/local/bin/send-branded-email.py 'washrights.org' 'contact@washrights.org' 'Wash Rights Network' 'test@example.com' 'Test' '<p>Hello World</p>'
```

**Change Password:**
```bash
doveadm pw -s SHA512-CRYPT -p "NewPassword"
# Then update /etc/dovecot/users
```

**Check Logs:**
```bash
journalctl -u postfix -f
```
