import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Download, 
  Star, 
  Trophy, 
  Coins, 
  Gamepad2, 
  Shield, 
  Users, 
  Zap,
  ChevronDown,
  Play,
  Award,
  Target,
  Gift,
  X
} from 'lucide-react'

// Import game screenshots
import gameScreen1 from '../assets/IMG-20250731-WA0006.jpg'
import gameScreen2 from '../assets/IMG-20250731-WA0007.jpg'
import gameScreen3 from '../assets/IMG-20250731-WA0008.jpg'
import gameScreen4 from '../assets/IMG-20250731-WA0009.jpg'
import gameScreen5 from '../assets/IMG-20250731-WA0010.jpg'
import gameScreen6 from '../assets/IMG-20250731-WA0011.jpg'
import gameScreen7 from '../assets/IMG-20250731-WA0012.jpg'
import gameScreen8 from '../assets/IMG-20250731-WA0013.jpg'
import gameScreen9 from '../assets/IMG-20250731-WA0014.jpg'

// Import trailer video
import trailerVideo from '../assets/Game_Ad_Improvement_For_Google_Play.mp4'

const LandingPage = () => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0)
  const [showTrailer, setShowTrailer] = useState(false)
  
  const screenshots = [
    gameScreen1, gameScreen2, gameScreen3, gameScreen4, gameScreen5,
    gameScreen6, gameScreen7, gameScreen8, gameScreen9
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [screenshots.length])

  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8 text-orange-400" />,
      title: "Skill-Based Gameplay",
      description: "Master the art of match-3 puzzles with strategic thinking and pattern recognition"
    },
    {
      icon: <Coins className="w-8 h-8 text-yellow-400" />,
      title: "Earn Real Bitcoin",
      description: "Convert your gaming skills into actual cryptocurrency rewards"
    },
    {
      icon: <Trophy className="w-8 h-8 text-purple-400" />,
      title: "Achievements & Leaderboards",
      description: "Compete with players worldwide and unlock special achievements"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Fair & Secure",
      description: "Transparent gameplay mechanics with secure reward distribution"
    }
  ]

  const gameFeatures = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Match-3 Puzzles",
      description: "Classic tile-matching gameplay with Bitcoin-themed elements"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Daily Rewards",
      description: "Log in daily to claim your satoshi rewards"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Power-ups",
      description: "Use special abilities to boost your score and earnings"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Spin Wheel",
      description: "Try your luck with the satoshi luck wheel for bonus rewards"
    }
  ]

  const handleDownload = () => {
    // Google Play Store link for the app
    window.open('https://play.google.com/store/apps/details?id=com.satoshimatch3.game', '_blank')
  }

  const handleWatchTrailer = () => {
    setShowTrailer(true)
  }

  const closeTrailer = () => {
    setShowTrailer(false)
  }

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
              <Coins className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              SatoshiMatch3
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-orange-400 transition-colors">Features</a>
            <a href="#screenshots" className="hover:text-orange-400 transition-colors">Screenshots</a>
            <a href="#download" className="hover:text-orange-400 transition-colors">Download</a>
            <Link to="/privacy" className="hover:text-orange-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-orange-400 transition-colors">Terms</Link>
          </div>
        </div>
      </nav>

      {/* Video Trailer Modal */}
      {showTrailer && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeTrailer}
              className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <video
              controls
              autoPlay
              className="w-full rounded-lg"
              poster={gameScreen1}
            >
              <source src={trailerVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-400/30">
            🎮 Skill-Based Gaming • 💰 Real Bitcoin Rewards
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
            SatoshiMatch3
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Earn Real Bitcoin
          </p>
          
          <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
            The ultimate match-3 puzzle game where your skills translate into cryptocurrency rewards. 
            Match tiles, complete levels, and earn satoshis through strategic gameplay.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-semibold px-8 py-3"
              onClick={handleDownload}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black px-8 py-3"
              onClick={handleWatchTrailer}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Trailer
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>4.8/5 Rating</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>10K+ Players</span>
            </div>
            <div className="flex items-center space-x-1">
              <Coins className="w-4 h-4 text-orange-400" />
              <span>Real Bitcoin Rewards</span>
            </div>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Game Screenshots
          </h2>
          
          <div className="max-w-md mx-auto">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={screenshots[currentScreenshot]} 
                alt={`Game Screenshot ${currentScreenshot + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentScreenshot(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentScreenshot ? 'bg-orange-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            {screenshots.slice(0, 4).map((screenshot, index) => (
              <button
                key={index}
                onClick={() => setCurrentScreenshot(index)}
                className={`aspect-[9/16] rounded-lg overflow-hidden transition-all ${
                  index === currentScreenshot ? 'ring-2 ring-orange-400 scale-105' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img 
                  src={screenshot} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose SatoshiMatch3?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Game Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-orange-500/10 border border-white/10">
                <div className="mb-4 flex justify-center text-orange-400">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 px-4 bg-gradient-to-r from-orange-500/20 to-yellow-500/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Download SatoshiMatch3 now and turn your puzzle-solving skills into Bitcoin rewards!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-semibold px-8 py-4"
              onClick={handleDownload}
            >
              <Download className="w-5 h-5 mr-2" />
              Download for Android
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black px-8 py-4"
              onClick={handleWatchTrailer}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Trailer
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 mt-6">
            Free to play • Age 18+ • Real Bitcoin rewards
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/40 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                  <Coins className="w-5 h-5 text-black" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  SatoshiMatch3
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                The ultimate skill-based match-3 puzzle game with real Bitcoin rewards.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Game</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-orange-400 transition-colors">Features</a></li>
                <li><a href="#screenshots" className="hover:text-orange-400 transition-colors">Screenshots</a></li>
                <li><a href="#download" className="hover:text-orange-400 transition-colors">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: ahmadbosha589@gmail.com</li>
                <li>Location: USA, California</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 SatoshiMatch3. All rights reserved. This is a skill-based game, not gambling.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

