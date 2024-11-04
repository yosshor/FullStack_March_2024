export function logout(req: any, res: any) {
  // Get the cookie name
  res.cookie("userId", "", {
    httpOnly: true,
    maxAge: 1,
  });
  res.status(200).json({ message: "Logged out successfully" });
}
