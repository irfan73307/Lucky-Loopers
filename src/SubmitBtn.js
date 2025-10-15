import './SubmitCss.css';
import React, { useRef, useState, useEffect } from 'react';
import Confetti from 'react-confetti';

export function SubmitBtn({ p }) {
    const isRunning = useRef(false);
    const [runningState, setRunningState] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [winner, setWinner] = useState(null);
    const countIterations = 5; // total iterations before revealing
        const [confettiSize, setConfettiSize] = useState({ width: typeof window !== 'undefined' ? window.innerWidth : 0, height: typeof window !== 'undefined' ? window.innerHeight : 0 });
            useEffect(() => {
                const onResize = () => setConfettiSize({ width: window.innerWidth, height: window.innerHeight });
                window.addEventListener('resize', onResize);
                return () => window.removeEventListener('resize', onResize);
            }, []);

    const addRunningClass = () => {
        const len = p?.length || 0;
        for (let i = 0; i < len; i++) {
            const el = document.getElementById(`${p[i].id}`);
            if (el) el.classList.add('running');
        }
    };

    const removeRunningClass = () => {
        const len = p?.length || 0;
        for (let i = 0; i < len; i++) {
            const el = document.getElementById(`${p[i].id}`);
            if (el) el.classList.remove('running');
        }
    };

    const check = () => {
        // remove previous winner highlight and message when starting a new run
        const prev = document.querySelector('.memberList .winner');
        if (prev) prev.classList.remove('winner');
        setWinner(null);

        if (isRunning.current) return;
        isRunning.current = true;
        setRunningState(true);

        const len = p?.length || 50;
        let v = Math.floor(Math.random() * len) + 1;
        let countid = 0;

        addRunningClass();

        const intervalid = setInterval(() => {
            countid = countid + 1;
            const resultEl = document.getElementById('result');
            if (resultEl) resultEl.textContent = 'Loading...';

            for (let i = 0; i < len; i++) {
                const member = document.getElementById(`${p[i].id}`);

                if (member) {
                    // During iterations, randomly highlight members
                    if (countid < countIterations) {
                        // Show random highlights during the interval
                        const randomHighlight = Math.floor(Math.random() * len);
                        if (i === randomHighlight) {
                            member.classList.add('highlight');
                        } else {
                            member.classList.remove('highlight');
                        }
                    } else {
                        // On the final iteration, show the correct value
                        if (p[i].id === v) {
                            member.classList.add('highlight');
                        } else {
                            member.classList.remove('highlight');
                        }
                    }
                }
            }

            if (countid === countIterations) {
                clearInterval(intervalid);

                setTimeout(() => {
                    removeRunningClass();

                                                // remove any previous winner class
                                                const prev = document.querySelector('.memberList .winner');
                                                if (prev) prev.classList.remove('winner');

                                                p.forEach((value) => {
                                                    if (value.id === v) {
                                                        const r = document.getElementById('result');
                                                        if (r) r.textContent = `Name: ${value.name}, City: ${value.city}`;
                                                        // show confetti briefly
                                                        setShowConfetti(true);
                                                        // ensure confetti fills the current viewport
                                                        setConfettiSize({ width: window.innerWidth, height: window.innerHeight });
                                                        setTimeout(() => setShowConfetti(false), 7000);
                                                        // set winner for a wishing message
                                                        setWinner(value);

                                                        // highlight the winning element with the special winner style and scroll it into view
                                                        const winnerEl = document.getElementById(`${value.id}`);
                                                        if (winnerEl) {
                                                            winnerEl.classList.add('winner');
                                                            // smooth scroll to center the winner in viewport
                                                            winnerEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                                        }
                                                    }
                                                });

                    isRunning.current = false;
                    setRunningState(false);
                }, 2000);
            }
        }, 1000);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px', justifyContent: 'center' }}>
            <button
                onClick={check}
                disabled={runningState}
                className="submitBtn"
            >
                {runningState ? 'Running...' : 'Submit'}
            </button>

            <h1 id="result">...</h1>

            {showConfetti && <Confetti />}
                    {winner && (
                        <div className="winnerMsg">Congratulations, {winner.name}! 🎉 — Best wishes from the Developer Irfan.</div>
                    )}
        </div>
    );
}