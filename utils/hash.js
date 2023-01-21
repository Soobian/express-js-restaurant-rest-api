import bcrypt from 'bcrypt';

export async function hashPass(unHashedPass) {
    const hash = await bcrypt.hash(unHashedPass, 10);
    return hash;
}

export async function isSamePass(unHashedPass, hashedPass) {
    const same = await bcrypt.compare(unHashedPass, hashedPass)
    return same;
}