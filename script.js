:root {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 820px) {
    .nav-menu {
        position: fixed;
        inset: 78px 16px auto 16px;
        padding: 18px;
        border-radius: 24px;
        background: var(--panel-strong);
        border: 1px solid var(--line);
        flex-direction: column;
        align-items: flex-start;
        gap: 18px;
        transform: scale(0.96);
        opacity: 0;
        pointer-events: none;
        transition: 0.25s ease;
    }

    .nav-menu.active {
        opacity: 1;
        pointer-events: auto;
        transform: scale(1);
    }

    .hamburger {
        display: inline-flex;
    }

    .hero-status-board,
    .stats-grid,
    .members-grid,
    .schedule-grid,
    .feature-row {
        grid-template-columns: 1fr;
    }

    .hero-card-footer {
        flex-direction: column;
        align-items: flex-start;
    }
}

@media (max-width: 560px) {
    .section-shell {
        padding: 72px 0;
    }

    .nav-container,
    .container {
        width: min(100% - 20px, 1200px);
    }

    .title-top {
        font-size: 2.5rem;
    }

    .title-bottom {
        font-size: 2.2rem;
    }

    .logo-text {
        display: none;
    }

    .hero-description {
        font-size: 1rem;
    }

    .member-header {
        align-items: flex-start;
    }

    .notification {
        left: 12px;
        right: 12px;
        top: auto;
        bottom: 12px;
        max-width: none;
    }
}
