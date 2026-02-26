from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class ModelTests(TestCase):
    def test_user_creation(self):
        user = User.objects.create(email='test@hero.com', name='Test Hero', team='Marvel')
        self.assertEqual(user.name, 'Test Hero')

    def test_team_creation(self):
        team = Team.objects.create(name='Avengers')
        self.assertEqual(team.name, 'Avengers')

    def test_activity_creation(self):
        user = User.objects.create(email='test@hero.com', name='Test Hero', team='Marvel')
        activity = Activity.objects.create(user=user, type='Running', duration=30, date='2026-02-26')
        self.assertEqual(activity.type, 'Running')

    def test_leaderboard_creation(self):
        leaderboard = Leaderboard.objects.create(team='Marvel', points=100)
        self.assertEqual(leaderboard.points, 100)

    def test_workout_creation(self):
        workout = Workout.objects.create(name='Hero HIIT', description='HIIT for heroes', suggested_for='Marvel')
        self.assertEqual(workout.name, 'Hero HIIT')
