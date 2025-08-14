import { useState } from "react"

export function TwitterCard({ userName, children }) {
  const imgSource = "https://unavatar.io/youtube/" + userName
  const [isFollowing, setIsFollowing] = useState(false)
  const followText = isFollowing ? "Following" : "Follow"

  const bottonStyle = isFollowing
    ? "tw-follow-card-button is-following"
    : "tw-follow-card-button"

  function changeFollow() {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-name">
        <img
          className="tw-follow-card-avatar"
          alt="Musical Profile"
          src={imgSource}
        />
        <div className="tw-follow-card-profile-info">
          <strong>{children}</strong>
          <span className="tw-follow-card-account">@{userName}</span>
        </div>
      </header>

      <aside>
        <button onClick={changeFollow} className={bottonStyle}>
          <span className="tw-follow-card-button-to-follow">{followText}</span>
          <span className="tw-follow-card-button-stop-following">Unfollow</span>
        </button>
      </aside>
    </article>
  )
}
