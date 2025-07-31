import { Link } from 'react-router-dom'
import { ArrowLeft, FileText, Coins } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TermsOfService = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
              <Coins className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              SatoshiMatch3
            </span>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-4">
            <FileText className="w-12 h-12 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-400">
            Terms and conditions for using SatoshiMatch3
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/5 rounded-lg border border-white/10 p-8">
            <div className="prose prose-invert max-w-none">
              
              <div className="mb-8">
                <p className="text-gray-400 mb-2"><strong>Effective Date:</strong> {currentDate}</p>
                <p className="text-gray-400"><strong>Last Updated:</strong> {currentDate}</p>
              </div>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By downloading, installing, or playing Satoshi Match 3 ("Game"), you agree to these Terms of Service ("Terms"). If you do not agree, please do not use the Game.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">2. Game Description</h2>
              <p className="text-gray-300 mb-6">
                Satoshi Match 3 is a skill-based tile-matching puzzle game where players match colored tiles to score points and progress through levels. Success depends on strategy, pattern recognition, and planning skills. This is not a gambling application.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">3. Eligibility</h2>
              <p className="text-gray-300 mb-6">
                You must be at least 18 years old to play Satoshi Match 3. By using the Game, you confirm that you meet this age requirement and are legally capable of entering into this agreement.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">4. Account Registration</h2>
              <div className="text-gray-300 mb-6">
                <p className="mb-2">To access all features, you may need to create an account. You are responsible for:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Providing accurate information</li>
                  <li>Maintaining account security</li>
                  <li>All activities under your account</li>
                  <li>Notifying us of unauthorized access</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">5. Gameplay and Rewards</h2>
              <div className="text-gray-300 mb-6">
                <p className="mb-2"><strong>Skill-Based Gameplay:</strong> Satoshi Match 3 is a game of skill where outcomes depend on player ability, not chance.</p>
                <p className="mb-2"><strong>Reward System:</strong> Players may earn points through skillful gameplay. These points may be redeemable for rewards, including cryptocurrency, subject to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Minimum redemption thresholds</li>
                  <li>Verification requirements</li>
                  <li>Availability and program terms</li>
                  <li>Changes at our discretion</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">6. Prohibited Conduct</h2>
              <div className="text-gray-300 mb-6">
                <p className="mb-2">You agree not to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Use cheats, bots, or automated tools</li>
                  <li>Exploit bugs or glitches</li>
                  <li>Create multiple accounts</li>
                  <li>Engage in fraudulent activities</li>
                  <li>Violate any applicable laws</li>
                  <li>Reverse engineer the Game</li>
                  <li>Harass other players</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-300 mb-6">
                All Game content, including graphics, sounds, code, and gameplay elements, is owned by [Your Company Name] or its licensors. You receive a limited, non-transferable license to play the Game for personal entertainment.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">8. Google Play Compliance</h2>
              <div className="text-gray-300 mb-6">
                <p className="mb-2">This Game complies with Google Play Developer Program Policies. It:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Is a skill-based puzzle game, not gambling</li>
                  <li>Does not involve wagering or betting</li>
                  <li>Rewards are based on gameplay achievement</li>
                  <li>Follows all applicable content guidelines</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">9. Disclaimers</h2>
              <div className="text-gray-300 mb-6">
                <p className="mb-2"><strong>Service Availability:</strong> The Game is provided "as is" without warranties. We do not guarantee uninterrupted service.</p>
                <p className="mb-2"><strong>Reward Values:</strong> Any cryptocurrency rewards are subject to market volatility. We make no guarantees about future values.</p>
                <p className="mb-2"><strong>No Financial Advice:</strong> Nothing in the Game constitutes financial or investment advice.</p>
              </div>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-300 mb-6">
                To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages. Our total liability shall not exceed $100 or the amount of rewards earned in the past 12 months, whichever is less.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">11. Privacy</h2>
              <p className="text-gray-300 mb-6">
                Your privacy is important to us. Please review our <Link to="/privacy" className="text-orange-400 hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">12. Termination</h2>
              <p className="text-gray-300 mb-6">
                We may suspend or terminate accounts for Terms violations. You may delete your account at any time through the app settings.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-300 mb-6">
                We may update these Terms periodically. Material changes will be notified through the app. Continued use after changes constitutes acceptance.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">14. Governing Law</h2>
              <p className="text-gray-300 mb-6">
                These Terms are governed by [Your Jurisdiction] law. Any disputes shall be resolved through binding arbitration.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">15. Fair Play Statement</h2>
              <p className="text-gray-300 mb-6">
                Satoshi Match 3 is committed to fair play. All players have equal opportunities to succeed based on their skill and strategy. The game mechanics are transparent and consistent for all users.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">16. Contact Information</h2>
              <div className="text-gray-300 mb-6">
                <p className="mb-2">For questions about these Terms:</p>
                <p className="mb-1">Email: Ahmadbosha589@gmail.com</p>
                <p>Address: USA, California</p>
              </div>

              <div className="bg-orange-500/10 border border-orange-400/30 rounded-lg p-4 mt-8">
                <p className="text-orange-300 font-semibold">
                  By playing Satoshi Match 3, you acknowledge that you have read, understood, and agree to these Terms of Service.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/40 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 SatoshiMatch3. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default TermsOfService

