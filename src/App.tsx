import { useRef, useState } from "react";
import {
  categoryDetails,
  type CategoryId,
  validateWordBanks,
} from "./data/wordBanks";
import {
  createRound,
  suggestedImposters,
  type Player,
  type Round,
} from "./game/logic";

type Screen =
  | "home"
  | "setup"
  | "reveal"
  | "discussion"
  | "results"
  | "online"
  | "rules"
  | "settings";

type IconName =
  | "arrow"
  | "check"
  | "chevron"
  | "copy"
  | "globe"
  | "info"
  | "minus"
  | "play"
  | "plus"
  | "settings"
  | "share"
  | "sound"
  | "spark"
  | "users"
  | "vibrate"
  | "wifi";

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="m5 12 7-7 7 7M12 5v14" />,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    copy: (
      <>
        <rect x="8" y="8" width="11" height="11" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5M12 8h.01" />
      </>
    ),
    minus: <path d="M5 12h14" />,
    play: <path d="m8 5 11 7-11 7V5Z" />,
    plus: <path d="M12 5v14M5 12h14" />,
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    share: (
      <>
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" />
      </>
    ),
    sound: (
      <>
        <path d="M11 5 7 9H3v6h4l4 4V5Z" />
        <path d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12" />
      </>
    ),
    spark: <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />,
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2M16 4a3 3 0 0 1 0 6M17 13a5 5 0 0 1 4 5v2" />
      </>
    ),
    vibrate: (
      <>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M3 8v8M21 8v8M12 17h.01" />
      </>
    ),
    wifi: <path d="M4 9a12 12 0 0 1 16 0M7 13a8 8 0 0 1 10 0M10 17a3 3 0 0 1 4 0M12 20h.01" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`wordmark ${compact ? "wordmark--compact" : ""}`}>
      <img
        className="wordmark__image"
        src="/assets/sly-logo.png"
        alt="SLY by Apex Parties"
      />
    </div>
  );
}

function Header({
  title,
  onBack,
  action,
}: {
  title?: string;
  onBack?: () => void;
  action?: React.ReactNode;
}) {
  return (
    <header className="topbar">
      {onBack ? (
        <button className="icon-button icon-button--back" onClick={onBack} aria-label="Go back">
          <Icon name="chevron" />
        </button>
      ) : (
        <Wordmark compact />
      )}
      {title && <h1>{title}</h1>}
      <div className="topbar__action">{action}</div>
    </header>
  );
}

function Toggle({
  active,
  onChange,
  label,
}: {
  active: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <button
      className={`toggle ${active ? "toggle--active" : ""}`}
      onClick={onChange}
      role="switch"
      aria-checked={active}
      aria-label={label}
    >
      <span />
    </button>
  );
}

const categoryIds = Object.keys(categoryDetails) as CategoryId[];

export default function App() {
  const sharedRoomCode =
    new URLSearchParams(window.location.search).get("room")?.toUpperCase().slice(0, 5) ?? "";
  const [screen, setScreen] = useState<Screen>(sharedRoomCode ? "online" : "home");
  const [haptics, setHaptics] = useState(true);
  const [hintsEnabled, setHintsEnabled] = useState(true);
  const [players, setPlayers] = useState<Player[]>([
    { id: crypto.randomUUID(), name: "Player 1" },
    { id: crypto.randomUUID(), name: "Player 2" },
    { id: crypto.randomUUID(), name: "Player 3" },
    { id: crypto.randomUUID(), name: "Player 4" },
  ]);
  const [imposters, setImposters] = useState(1);
  const [categories, setCategories] = useState<CategoryId[]>([
    "celebrities",
    "randomObjects",
    "foodAndDrinks",
  ]);
  const [round, setRound] = useState<Round | null>(null);
  const [revealIndex, setRevealIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [onlineView, setOnlineView] = useState<"entry" | "lobby">("entry");
  const [nickname, setNickname] = useState("");
  const [roomCode, setRoomCode] = useState(sharedRoomCode);
  const [shareStatus, setShareStatus] = useState("");

  const pulse = () => {
    if (haptics && "vibrate" in navigator) navigator.vibrate(30);
  };

  const toggleHaptics = () => {
    const nextValue = !haptics;
    setHaptics(nextValue);
    if ("vibrate" in navigator) navigator.vibrate(nextValue ? 40 : 0);
  };

  const createRoomCode = () => {
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const values = new Uint8Array(5);
    crypto.getRandomValues(values);
    return Array.from(values, (value) => alphabet[value % alphabet.length]).join("");
  };

  const shareInvite = async () => {
    const inviteUrl = new URL(window.location.href);
    inviteUrl.searchParams.set("room", roomCode);
    const text = `Join my SLY game. Room code: ${roomCode}`;
    const invite = `${text}\n${inviteUrl.toString()}`;

    try {
      await navigator.clipboard.writeText(invite);
      setShareStatus("Invite link copied");
    } catch {
      const field = document.createElement("textarea");
      field.value = invite;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const copied = document.execCommand("copy");
      field.remove();
      setShareStatus(copied ? "Invite link copied" : "Unable to copy link");
    }
  };

  const goHome = () => {
    setScreen("home");
  };

  const addPlayer = () => {
    const next = players.length + 1;
    setPlayers([...players, { id: crypto.randomUUID(), name: `Player ${next}` }]);
  };

  const removePlayer = () => {
    if (players.length <= 3) return;
    const next = players.slice(0, -1);
    setPlayers(next);
    setImposters((value) => Math.min(value, next.length - 1));
  };

  const updatePlayer = (id: string, name: string) => {
    setPlayers(players.map((player) => (player.id === id ? { ...player, name } : player)));
  };

  const startRound = () => {
    if (!validateWordBanks() || categories.length === 0) return;
    const recent = JSON.parse(sessionStorage.getItem("sly-recent") ?? "[]") as string[];
    const nextRound = createRound(players, categories, imposters, recent);
    sessionStorage.setItem(
      "sly-recent",
      JSON.stringify([nextRound.entry.word, ...recent].slice(0, 6)),
    );
    setRound(nextRound);
    setRevealIndex(0);
    setRevealed(false);
    setScreen("reveal");
  };

  const hideAndPass = () => {
    setRevealed(false);
    pulse();
    window.setTimeout(() => {
      if (!round || revealIndex >= round.players.length - 1) {
        setScreen("discussion");
      } else {
        setRevealIndex((value) => value + 1);
      }
    }, 260);
  };

  const rematch = () => {
    const nextRound = createRound(
      players,
      categories,
      imposters,
      round ? [round.entry.word] : [],
    );
    setRound(nextRound);
    setRevealIndex(0);
    setRevealed(false);
    setScreen("reveal");
  };

  if (screen === "home") {
    return (
      <main className="app-shell home-screen">
        <div className="ambient ambient--one" />
        <div className="ambient ambient--two" />
        <header className="home-actions">
          <button className="round-control" onClick={() => setScreen("settings")} aria-label="Settings">
            <Icon name="settings" size={20} />
          </button>
        </header>

        <section className="hero">
          <Wordmark />
          <h1>Everybody knows something.<br /><strong>Except SLY.</strong></h1>
          <p>Blend in. Find the SLY. Don’t get caught.</p>
        </section>

        <section className="mode-list">
          <button className="mode-card mode-card--online" onClick={() => setScreen("online")}>
            <span className="mode-card__icon"><Icon name="globe" size={28} /></span>
            <span className="mode-card__copy">
              <small>PLAY IN YOUR GROUP CHAT</small>
              <b>ONLINE</b>
              <span>WhatsApp, Snapchat or iMessage</span>
            </span>
            <span className="mode-card__arrow"><Icon name="chevron" /></span>
          </button>
          <button className="mode-card mode-card--offline" onClick={() => setScreen("setup")}>
            <span className="mode-card__icon"><Icon name="users" size={28} /></span>
            <span className="mode-card__copy">
              <small>PASS THE PHONE</small>
              <b>OFFLINE</b>
              <span>One phone, plenty drama</span>
            </span>
            <span className="mode-card__arrow"><Icon name="chevron" /></span>
          </button>
        </section>

        <button className="text-button" onClick={() => setScreen("rules")}>
          <Icon name="info" size={18} /> How to play
        </button>
      </main>
    );
  }

  if (screen === "setup") {
    return (
      <main className="app-shell">
        <Header title="Game setup" onBack={goHome} />
        <div className="screen-content setup-content">
          <div className="eyebrow">OFFLINE MODE</div>
          <h2>Set the stage</h2>
          <p className="lead">Get your people ready. You only need one phone.</p>

          <section className="panel">
            <div className="section-heading">
              <div><span>01</span><h3>Players</h3></div>
              <small>MIN. 3</small>
            </div>
            <div className="stepper">
              <button onClick={removePlayer} disabled={players.length <= 3}><Icon name="minus" /></button>
              <strong>{players.length}</strong>
              <button onClick={addPlayer}><Icon name="plus" /></button>
            </div>
            <div className="name-list">
              {players.map((player, index) => (
                <label key={player.id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <input value={player.name} onChange={(event) => updatePlayer(player.id, event.target.value)} aria-label={`Player ${index + 1} name`} />
                </label>
              ))}
            </div>
          </section>

          <section className="panel">
            <div className="section-heading">
              <div><span>02</span><h3>Number of SLYs</h3></div>
              <small>SUGGESTED {suggestedImposters(players.length)}</small>
            </div>
            <div className="stepper stepper--compact">
              <button onClick={() => setImposters(Math.max(1, imposters - 1))}><Icon name="minus" /></button>
              <strong>{imposters}</strong>
              <button onClick={() => setImposters(Math.min(players.length - 1, imposters + 1))}><Icon name="plus" /></button>
            </div>
          </section>

          <section className="panel">
            <div className="section-heading">
              <div><span>03</span><h3>Categories</h3></div>
              <small>CHOOSE ONE OR MORE</small>
            </div>
            <div className="category-grid">
              {categoryIds.map((id) => {
                const selected = categories.includes(id);
                return (
                  <button
                    key={id}
                    className={selected ? "selected" : ""}
                    onClick={() =>
                      setCategories(
                        selected
                          ? categories.filter((category) => category !== id)
                          : [...categories, id],
                      )
                    }
                  >
                    <span>{selected && <Icon name="check" size={15} />}</span>
                    {categoryDetails[id].label}
                  </button>
                );
              })}
            </div>
          </section>

          <section className="panel settings-panel">
            <div className="setting-row">
              <div>
                <Icon name="info" />
                <span><b>SLY hints</b><small>Show SLY a one-word hint</small></span>
              </div>
              <Toggle
                active={hintsEnabled}
                onChange={() => setHintsEnabled(!hintsEnabled)}
                label="SLY hints"
              />
            </div>
          </section>

        </div>
        <div className="sticky-action">
          <button className="primary-button" onClick={startRound} disabled={categories.length === 0 || players.some((p) => !p.name.trim())}>
            Start the game <Icon name="arrow" />
          </button>
        </div>
      </main>
    );
  }

  if (screen === "reveal" && round) {
    return (
      <RevealScreen
        round={round}
        index={revealIndex}
        revealed={revealed}
        hintsEnabled={hintsEnabled}
        onReveal={() => {
          setRevealed(true);
          pulse();
        }}
        onPass={hideAndPass}
        onExit={goHome}
      />
    );
  }

  if (screen === "discussion" && round) {
    return (
      <main className="app-shell phase-screen">
        <Header action={<button className="exit-link" onClick={goHome}>EXIT</button>} />
        <div className="phase-content">
          <div className="round-pill">ROUND 01</div>
          <div className="phase-icon"><Icon name="users" size={38} /></div>
          <h2>Everybody has<br />their identity.</h2>
          <p>Give clues, catch the bluff, and don’t mention the secret word.</p>
          <div className="category-pill">CATEGORY&nbsp; • &nbsp;{categoryDetails[round.category].shortLabel}</div>
          <div className="go-first-card">
            <small>GOES FIRST</small>
            <strong>{round.players[round.firstPlayerIndex].name}</strong>
            <span>{round.direction === "clockwise" ? "↻ then clockwise" : "↺ then anticlockwise"}</span>
          </div>
          <button className="primary-button reveal-sly-button" onClick={() => setScreen("results")}>
            <Icon name="spark" /> Show the SLY
          </button>
        </div>
      </main>
    );
  }

  if (screen === "results" && round) {
    const slyNames = round.players
      .filter((player) => player.role === "sly")
      .map((player) => player.name)
      .join(" & ");
    return (
      <main className="app-shell results-screen results-screen--reveal">
        <Header action={<button className="icon-button" onClick={goHome} aria-label="Close results"><Icon name="plus" /></button>} />
        <div className="results-hero">
          <h2 className="sly-name">{slyNames}<br /><span>SLYYYY 😂</span></h2>
        </div>
        <div className="results-sheet">
          <div className="secret-recap">
            <small>THE SECRET WORD WAS</small>
            <strong>{round.entry.word}</strong>
            <span>{categoryDetails[round.category].shortLabel}</span>
          </div>
          <button className="primary-button" style={{ marginTop: "18px" }} onClick={rematch}><Icon name="play" /> Play again</button>
          <button className="secondary-button" onClick={() => setScreen("setup")}><Icon name="settings" /> Change settings</button>
          <button className="text-button" onClick={goHome}>Back to home</button>
        </div>
      </main>
    );
  }

  if (screen === "online") {
    return (
      <main className="app-shell online-screen">
        <Header title={onlineView === "entry" ? "Online" : "Lobby"} onBack={() => onlineView === "lobby" ? setOnlineView("entry") : goHome()} />
        {onlineView === "entry" ? (
          <div className="screen-content">
            <div className="online-hero">
              <div className="signal-orbit"><Icon name="wifi" size={42} /></div>
              <div className="eyebrow">PLAY FROM ANYWHERE</div>
              <h2>Your crew.<br />Any location.</h2>
              <p>Create a room, share the code, and let the deception begin.</p>
            </div>
            <div className="notice"><Icon name="info" /><p><b>Temporary room</b><span>Share the invite with your group. Nothing is stored after the game ends.</span></p></div>
            <label className="field"><span>YOUR NICKNAME</span><input value={nickname} onChange={(event) => setNickname(event.target.value)} placeholder="What should we call you?" /></label>
            <button className="primary-button" disabled={!nickname.trim()} onClick={() => {
              setRoomCode(createRoomCode());
              setShareStatus("");
              setOnlineView("lobby");
            }}>Create a room <Icon name="arrow" /></button>
            <div className="or"><span />OR<span /></div>
            <label className="field"><span>ROOM CODE</span><input value={roomCode} onChange={(event) => setRoomCode(event.target.value.toUpperCase().slice(0, 6))} placeholder="Enter code" /></label>
            <button className="secondary-button" disabled={!nickname.trim() || roomCode.length < 4} onClick={() => setOnlineView("lobby")}>Join room</button>
          </div>
        ) : (
          <div className="screen-content lobby-content">
            <div className="room-code"><small>ROOM CODE</small><strong>{roomCode}</strong><button onClick={() => navigator.clipboard?.writeText(roomCode)}><Icon name="copy" /></button></div>
            <button className="share-button" onClick={shareInvite}><Icon name="copy" /> {shareStatus || "Copy invite link"}</button>
            <div className="lobby-status"><i /><span>LOBBY OPEN</span><b>1 / 12 PLAYERS</b></div>
            <div className="lobby-player"><span>{nickname.slice(0, 1).toUpperCase()}</span><b>{nickname}<small>HOST</small></b><em>READY</em></div>
            <div className="empty-slots"><Icon name="users" /><p>Waiting for the crew...<small>Share the room code to invite players.</small></p></div>
            <section className="panel settings-panel">
              <div className="setting-row"><div><Icon name="users" /><span><b>SLYs</b><small>Auto-adjusts with players</small></span></div><b>1</b></div>
            </section>
            <button className="primary-button" disabled>Need 2 more players</button>
          </div>
        )}
      </main>
    );
  }

  if (screen === "rules") {
    return (
      <main className="app-shell">
        <Header title="How to play" onBack={goHome} />
        <div className="screen-content rules-content">
          <div className="rules-hero"><Wordmark compact /><h2>Trust nobody.<br />Play it smart.</h2><p>Everybody knows the secret word — except SLY.</p></div>
          {[
            ["01", "Get your identity", "Pass the phone. Swipe up privately to see the secret word — or find out you’re SLY."],
            ["02", "Give your clues", "Take turns giving clues without saying the actual word. SLY must bluff to blend in."],
            ["03", "Talk your talk", "Discuss together in the room until everyone is ready."],
            ["04", "Show the SLY", "When everybody is ready, the person holding the phone taps Show the SLY."],
          ].map(([number, title, text]) => (
            <div className="rule-card" key={number}><strong>{number}</strong><div><h3>{title}</h3><p>{text}</p></div></div>
          ))}
          <button className="primary-button" onClick={() => setScreen("setup")}>Let’s play <Icon name="arrow" /></button>
        </div>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <Header title="Settings" onBack={goHome} />
      <div className="screen-content settings-content">
        <div className="settings-brand"><Wordmark /><p>Everybody knows something. Except SLY.</p></div>
        <section className="panel settings-panel">
          <div className="setting-row"><div><Icon name="vibrate" /><span><b>Haptic feedback</b><small>Vibrates on reveal and pass</small></span></div><Toggle active={haptics} onChange={toggleHaptics} label="Haptic feedback" /></div>
        </section>
        <section className="panel menu-panel">
          <button onClick={() => setScreen("rules")}><Icon name="info" /><span><b>How to play</b><small>Rules and win conditions</small></span><Icon name="chevron" /></button>
        </section>
        <div className="apex-credit">
          <img src="/assets/apexparties-logo.png" alt="ApexParties" />
          <div><small>POWERED BY</small><b>APEXPARTIES</b></div>
        </div>
        <p className="version">SLY v1.0 • MADE IN NIGERIA</p>
      </div>
    </main>
  );
}

function RevealScreen({
  round,
  index,
  revealed,
  hintsEnabled,
  onReveal,
  onPass,
  onExit,
}: {
  round: Round;
  index: number;
  revealed: boolean;
  hintsEnabled: boolean;
  onReveal: () => void;
  onPass: () => void;
  onExit: () => void;
}) {
  const player = round.players[index];
  const startY = useRef<number | null>(null);
  const [drag, setDrag] = useState(0);
  const [dragging, setDragging] = useState(false);
  const roleLabel = player.role === "sly" ? "SLY" : round.entry.word;
  const hint = round.entry.hint;

  const finishDrag = () => {
    if (drag < -65 && !revealed) onReveal();
    setDrag(0);
    setDragging(false);
    startY.current = null;
  };

  return (
    <main className={`app-shell reveal-screen ${revealed ? "is-revealed" : ""} ${player.role === "sly" ? "is-sly" : ""}`}>
      <Header action={<button className="exit-link" onClick={onExit}>EXIT</button>} />
      <div className="reveal-meta">
        <span>PLAYER {index + 1} OF {round.players.length}</span>
        <div>{round.players.map((_, dot) => <i key={dot} className={dot <= index ? "active" : ""} />)}</div>
      </div>
      <div className="player-intro"><small>PASS THE PHONE TO</small><h2>{player.name}</h2><p>Make sure nobody else is looking.</p></div>
      <div className="card-stage">
        <div
          className="identity-card"
          onPointerDown={(event) => {
            startY.current = event.clientY;
            setDragging(true);
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (startY.current !== null) {
              const maximumLift = event.currentTarget.clientHeight * -0.55;
              const nextDrag = Math.max(maximumLift, Math.min(0, event.clientY - startY.current));
              setDrag(nextDrag);
            }
          }}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
        >
          <div className="card-front">
            <small>{player.role === "sly" ? "YOU ARE" : "YOUR SECRET WORD"}</small>
            <strong>{roleLabel}</strong>
            {player.role === "sly" && hintsEnabled && <div className="revealed-hint"><small>YOUR HINT</small><b>{hint}</b></div>}
          </div>
          <div
            className={`card-cover ${dragging ? "is-dragging" : ""}`}
            style={{ transform: `translateY(${drag}px)` }}
          >
            <div className="card-pattern" />
            <div className="card-back">
              <img className="card-logo" src="/assets/apexparties-logo.png" alt="ApexParties" />
              <small>PLAYER</small>
              <strong className="card-player-name">{player.name}</strong>
              <div className="swipe-cue"><Icon name="arrow" /><b>SWIPE UP</b><span>to reveal your identity</span></div>
            </div>
          </div>
        </div>
      </div>
      {!revealed && <p className="swipe-help"><Icon name="arrow" size={18} /> Swipe the card upward</p>}
      {revealed && <button className="primary-button pass-button" onClick={onPass}>Next <Icon name="chevron" /></button>}
    </main>
  );
}
