// 文件路径: /api/confirm.js

export default function handler(req, res) {
  // 1. 我们只接受 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  // 2. 从前端发来的请求中获取老师的名字
  const { teacherName } = req.body;

  if (!teacherName) {
    return res.status(400).json({ message: 'Missing teacher name' });
  }

  // 3. 【核心】在这里记录信息
  // Vercel 会自动捕捉 console.log 的输出，并显示在后台日志里
  console.log(`[同学会确认] 尊敬的 ${teacherName} 老师已确认出席！`);

  // 4. 向前端返回一个成功的响应
  return res.status(200).json({ message: `Confirmation for ${teacherName} received.` });
}
