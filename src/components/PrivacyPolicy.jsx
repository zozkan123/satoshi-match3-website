import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Coins } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PrivacyPolicy = () => {
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
            <Shield className="w-12 h-12 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400">
            How we collect, use, and protect your information
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

              <h2 className="text-2xl font-bold text-orange-400 mb-4">1. Introduction</h2>
              <p className="text-gray-300 mb-6">
                Welcome to Satoshi Match 3, a skill-based puzzle game developed by [Your Company Name]. This Privacy Policy explains how we collect, use, and protect your information when you play our match-3 puzzle game.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">2. Age Requirements</h2>
              <p className="text-gray-300 mb-6">
                Satoshi Match 3 is intended for users aged 18 and above. We do not knowingly collect personal information from anyone under 18 years of age. If we discover that we have collected data from someone under 18, we will promptly delete it.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">3. Information We Collect</h2>
              <div className="text-gray-300 mb-6">
                <p className="mb-2"><strong>Account Information:</strong> Username, email address (optional), and encrypted password</p>
                <p className="mb-2"><strong>Game Data:</strong> High scores, level progress, achievements, and gameplay statistics</p>
                <p className="mb-2"><strong>Reward Information:</strong> Bitcoin wallet address (only if you choose to withdraw rewards)</p>
                <p className="mb-2"><strong>Device Information:</strong> Device type, operating system version, and unique device identifiers</p>
                <p className="mb-2"><strong>Analytics Data:</strong> Game performance metrics and feature usage statistics</p>
              </div>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">4. How We Use Your Information</h2>
              <div className="text-gray-300 mb-6">
                <p className="mb-2">We use your information to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Provide and improve the game experience</li>
                  <li>Track your progress and achievements</li>
                  <li>Process reward redemptions (when requested)</li>
                  <li>Send important game updates and notifications</li>
                  <li>Detect and prevent cheating or fraudulent activities</li>
                  <li>Analyze game performance and optimize features</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">5. Google Play Services</h2>
              <p className="text-gray-300 mb-6">
                Our game integrates with Google Play Services for features such as achievements and leaderboards. Google's use of your data is governed by Google's Privacy Policy. We only access the minimum data necessary to provide these features.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">6. Reward System Transparency</h2>
              <div className="text-gray-300 mb-6">
                <p className="mb-2">Satoshi Match 3 is primarily a skill-based puzzle game. Any cryptocurrency rewards are:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Earned through skillful gameplay and achievements</li>
                  <li>Not based on chance or gambling mechanics</li>
                  <li>Subject to availability and may be modified or discontinued</li>
                  <li>Processed securely when you choose to redeem them</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">7. Data Security</h2>
              <div className="text-gray-300 mb-6">
                <p className="mb-2">We implement industry-standard security measures to protect your data, including:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Encryption of sensitive information</li>
                  <li>Secure server infrastructure</li>
                  <li>Regular security updates</li>
                  <li>Limited access to personal data</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">8. Data Sharing</h2>
              <div className="text-gray-300 mb-6">
                <p className="mb-2">We do not sell, trade, or rent your personal information. We may share data only:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>With service providers who help operate the game</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights or user safety</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">9. Your Rights</h2>
              <div className="text-gray-300 mb-6">
                <p className="mb-2">You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of promotional communications</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">10. Data Retention</h2>
              <p className="text-gray-300 mb-6">
                We retain your data only as long as necessary to provide the game service and comply with legal obligations. You may request deletion of your account at any time.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">11. Children's Privacy</h2>
              <p className="text-gray-300 mb-6">
                Satoshi Match 3 is not directed at children under 18. We do not knowingly collect information from children. Parents who believe their child has provided information should contact us immediately.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">12. Changes to This Policy</h2>
              <p className="text-gray-300 mb-6">
                We may update this Privacy Policy periodically. We will notify you of material changes through the app or email. Continued use after changes constitutes acceptance.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">13. Contact Information</h2>
              <div className="text-gray-300 mb-6">
                <p className="mb-2">For privacy-related questions or concerns:</p>
                <p className="mb-1">Email: ahmadbosha589@gmail.com</p>
                <p>Address: USA, California</p>
              </div>

              <h2 className="text-2xl font-bold text-orange-400 mb-4">14. Compliance Statement</h2>
              <p className="text-gray-300 mb-6">
                This game complies with Google Play Developer Program Policies. It is a skill-based puzzle game and does not constitute gambling or wagering.
              </p>

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

export default PrivacyPolicy

