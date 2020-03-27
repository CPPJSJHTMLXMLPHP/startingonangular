
function base64URLEncode(str) {
    return str.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}
var verifier = base64URLEncode(crypto.randomBytes(32));

function sha256(buffer) {
    return crypto.createHash('sha256').update(buffer).digest();
}
var challenge = base64URLEncode(sha256(verifier));

https://dev-z1l2t2h6.auth0.com/authorize?
    audience=API_AUDIENCE&
    scope == SCOPE&
    response_type == code&
    client_id == L0t36A5WU55Xi7gN62wGS6a0byksd7dJ&
    code_challenge == CODE_CHALLENGE&
    code_challenge_method == S256&
    redirect_uri == https;//YOUR_APP/callback
    
    