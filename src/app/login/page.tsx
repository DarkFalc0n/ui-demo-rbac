export default function LoginPage() {
  return (
    <div className="">
      <h1>Login</h1>
      <form>
        <label>
          Email <input type="email" />
        </label>
        <label>
          Password <input type="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
