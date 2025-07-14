import jwt from 'jsonwebtoken';

const USERS = [
  { username: 'admin', password: 'admin123' }
];

export async function loginService(username, password) {
  const user = USERS.find(u => u.username === username && u.password === password);
  if (!user) throw new Error('Usuario o contraseña incorrectos');

  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
}