import { loginService } from '../services/auth.service.js';

export async function login(req, res) {
  const { username, password } = req.body;

  try {
    const token = await loginService(username, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}