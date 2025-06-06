// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GitHubCalendar from 'react-github-calendar';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Dashboard = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const rawUser = query.get('user');
  const leetUser = query.get('leetcode');
  const [profile, setProfile] = useState(null);
  const [leetcode, setLeetCode] = useState(null);

  useEffect(() => {
    if (rawUser) {
      const userObj = JSON.parse(decodeURIComponent(rawUser));
      setProfile(userObj);
      localStorage.setItem('github_user', JSON.stringify(userObj));
    } else {
      const saved = localStorage.getItem('github_user');
      if (saved) setProfile(JSON.parse(saved));
    }

    if (leetUser) {
      fetch(`https://leetcode-stats-api.herokuapp.com/${leetUser}`)
        .then(res => res.json())
        .then(data => {
          setLeetCode(data);
          localStorage.setItem('leetcode_user', leetUser);
        });
    } else {
      const savedLeet = localStorage.getItem('leetcode_user');
      if (savedLeet) {
        fetch(`https://leetcode-stats-api.herokuapp.com/${savedLeet}`)
          .then(res => res.json())
          .then(data => setLeetCode(data));
      }
    }
  }, [rawUser, leetUser]);

  const connectLeetCode = () => {
    const username = prompt('Enter your LeetCode username:');
    if (username) {
      navigate(`/dashboard?leetcode=${username}`);
    }
  };

  const connectGitHub = () => {
    window.location.href = 'http://localhost:5000/auth/github';
  };

  const leetChartData = leetcode ? {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        label: 'Problems Solved',
        data: [leetcode.easySolved, leetcode.mediumSolved, leetcode.hardSolved],
        backgroundColor: ['#16a34a', '#ca8a04', '#dc2626'],
        borderRadius: 8,
        borderSkipped: false,
        barThickness: 40,
      },
    ],
  } : null;

  const leetChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'LeetCode Problem Difficulty Breakdown',
        color: '#ffffff',
        font: { size: 18 }
      },
      tooltip: {
        backgroundColor: '#111827',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#38bdf8',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: '#cbd5e1' },
        grid: { color: '#334155' },
      },
      y: {
        ticks: { color: '#cbd5e1', stepSize: 10 },
        grid: { color: '#334155' },
      },
    },
  };

  return (
    
    <div className="dashboard-container">
      <div className="welcome-banner">
  <h1>
    {profile
      ? `Welcome back, ${profile.name || profile.login}!`
      : leetcode
      ? `Welcome back, ${leetcode.username}!`
      : 'Welcome to your Dashboard!'}
  </h1>
</div>
    <div className="dashboard-split-container">
      <div className="profile-card">
        {profile ? (
          <>
            <img src={profile.avatar_url} alt="avatar" className="avatar" />
            <h2>{profile.name || profile.login}</h2>
            <p className="bio">{profile.bio}</p>
            <p><strong>Public Repos:</strong> {profile.public_repos}</p>
            <p><strong>GitHub Profile:</strong> <a href={profile.html_url} target="_blank" rel="noopener noreferrer">{profile.html_url}</a></p>
            <GitHubCalendar username={profile.login} />
          </>
        ) : (
          <>
            <p>GitHub data not found.</p>
            <button onClick={connectGitHub} className="connect-btn">Connect GitHub</button>
          </>
        )}
      </div>

      <div className="profile-card">
        {leetcode ? (
          <>
            <h2>👨‍💻 LeetCode Performance</h2>
            <p><strong>Username:</strong> {leetcode.username}</p>
            <p><strong>Total Solved:</strong> <span style={{ color: '#22c55e' }}>{leetcode.totalSolved}</span></p>
            <p>🔹 Easy: {leetcode.easySolved} | 🟠 Medium: {leetcode.mediumSolved} | 🔴 Hard: {leetcode.hardSolved}</p>
            <p><strong>Global Ranking:</strong> #{leetcode.ranking}</p>
            {leetChartData && (
              <div style={{ marginTop: '5rem', width: '100%' }}>
                <Bar data={leetChartData} options={leetChartOptions} />
              </div>
            )}
          </>
        ) : (
          <>
            <p>LeetCode data not found.</p>
            <button onClick={connectLeetCode} className="connect-btn">Connect LeetCode</button>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
