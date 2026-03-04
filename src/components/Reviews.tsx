'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ADMIN_PASSWORD = 'kaveesha2025'

interface Review {
  id: string
  name: string
  role: string
  message: string
  rating: number
  date: string
  approved: boolean
}

const STORAGE_KEY = 'portfolio_reviews'

function getReviews(): Review[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch { return [] }
}

function saveReviews(reviews: Review[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews))
}

export default function Reviews() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [reviews, setReviews] = useState<Review[]>([])
  const [showForm, setShowForm] = useState(false)
  const [showAdmin, setShowAdmin] = useState(false)
  const [adminAuth, setAdminAuth] = useState(false)
  const [adminPw, setAdminPw] = useState('')
  const [adminError, setAdminError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', role: '', message: '', rating: 5 })

  useEffect(() => {
    setReviews(getReviews())
  }, [])

  const approvedReviews = reviews.filter(r => r.approved)
  const pendingReviews = reviews.filter(r => !r.approved)

  function handleSubmit() {
    if (!form.name || !form.message) return
    const newReview: Review = {
      id: Date.now().toString(),
      name: form.name,
      role: form.role || 'Visitor',
      message: form.message,
      rating: form.rating,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      approved: false,
    }
    const updated = [...reviews, newReview]
    setReviews(updated)
    saveReviews(updated)
    setForm({ name: '', role: '', message: '', rating: 5 })
    setShowForm(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  function handleAdminLogin() {
    if (adminPw === ADMIN_PASSWORD) {
      setAdminAuth(true)
      setAdminError('')
    } else {
      setAdminError('Wrong password!')
    }
  }

  function approveReview(id: string) {
    const updated = reviews.map(r => r.id === id ? { ...r, approved: true } : r)
    setReviews(updated)
    saveReviews(updated)
  }

  function deleteReview(id: string) {
    const updated = reviews.filter(r => r.id !== id)
    setReviews(updated)
    saveReviews(updated)
  }

  return (
    <section id="reviews" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="font-mono text-xs text-primary uppercase tracking-[0.2em] block mb-3"
            >
              05 / Reviews
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-heading text-5xl lg:text-6xl text-white"
            >
              What People <span className="gradient-text">Say</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex gap-3"
          >
            <button
              onClick={() => setShowForm(!showForm)}
              className="btn-primary"
            >
              + Add Review
            </button>
            <button
              onClick={() => setShowAdmin(!showAdmin)}
              className="btn-outline"
            >
              🔐 Admin
            </button>
          </motion.div>
        </div>

        {/* Success Toast */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/30 text-primary font-mono text-sm text-center"
            >
              ✅ Review submitted! Waiting for admin approval.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add Review Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12 overflow-hidden"
            >
              <div className="glass-card rounded-2xl p-8 border border-primary/20">
                <h3 className="font-display font-700 text-white text-xl mb-6">Leave a Review</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="font-mono text-xs text-white/40 uppercase tracking-wider block mb-2">Your Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 font-mono text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-white/40 uppercase tracking-wider block mb-2">Role / Title</label>
                    <input
                      type="text"
                      value={form.role}
                      onChange={e => setForm({ ...form, role: e.target.value })}
                      placeholder="Software Engineer, Lecturer..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 font-mono text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="font-mono text-xs text-white/40 uppercase tracking-wider block mb-2">Message *</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your review here..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 font-mono text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <div className="mb-6">
                  <label className="font-mono text-xs text-white/40 uppercase tracking-wider block mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        onClick={() => setForm({ ...form, rating: star })}
                        className={`text-2xl transition-transform hover:scale-110 ${star <= form.rating ? 'opacity-100' : 'opacity-30'}`}
                      >
                        ⭐
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={handleSubmit} className="btn-primary">Submit Review</button>
                  <button onClick={() => setShowForm(false)} className="btn-outline">Cancel</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Admin Panel */}
        <AnimatePresence>
          {showAdmin && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12 overflow-hidden"
            >
              <div className="glass-card rounded-2xl p-8 border border-secondary/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display font-700 text-white text-xl">🔐 Admin Panel</h3>
                  <button onClick={() => { setShowAdmin(false); setAdminAuth(false); setAdminPw('') }} className="text-white/30 hover:text-white text-sm font-mono">Close</button>
                </div>

                {!adminAuth ? (
                  <div className="max-w-xs">
                    <label className="font-mono text-xs text-white/40 uppercase tracking-wider block mb-2">Admin Password</label>
                    <input
                      type="password"
                      value={adminPw}
                      onChange={e => setAdminPw(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleAdminLogin()}
                      placeholder="Enter password"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 font-mono text-sm focus:outline-none focus:border-secondary/50 mb-3"
                    />
                    {adminError && <p className="text-secondary text-xs font-mono mb-3">{adminError}</p>}
                    <button onClick={handleAdminLogin} className="btn-primary w-full">Login</button>
                  </div>
                ) : (
                  <div>
                    <div className="flex gap-4 mb-4 font-mono text-xs text-white/40">
                      <span>Pending: <span className="text-secondary">{pendingReviews.length}</span></span>
                      <span>Approved: <span className="text-primary">{approvedReviews.length}</span></span>
                      <span>Total: <span className="text-white">{reviews.length}</span></span>
                    </div>

                    {reviews.length === 0 ? (
                      <p className="text-white/30 font-mono text-sm">No reviews yet.</p>
                    ) : (
                      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                        {reviews.map(review => (
                          <div key={review.id} className={`p-4 rounded-xl border transition-colors ${review.approved ? 'border-primary/20 bg-primary/5' : 'border-secondary/20 bg-secondary/5'}`}>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-display font-700 text-white text-sm">{review.name}</span>
                                  <span className="font-mono text-xs text-white/40">{review.role}</span>
                                  <span className="font-mono text-xs text-white/30">{review.date}</span>
                                  <span>{'⭐'.repeat(review.rating)}</span>
                                </div>
                                <p className="text-white/60 text-sm">{review.message}</p>
                                <span className={`inline-block mt-2 font-mono text-xs px-2 py-0.5 rounded-full ${review.approved ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                                  {review.approved ? '✅ Approved' : '⏳ Pending'}
                                </span>
                              </div>
                              <div className="flex gap-2 flex-shrink-0">
                                {!review.approved && (
                                  <button
                                    onClick={() => approveReview(review.id)}
                                    className="px-3 py-1.5 rounded-lg bg-primary/20 text-primary font-mono text-xs hover:bg-primary/30 transition-colors"
                                  >
                                    Approve
                                  </button>
                                )}
                                <button
                                  onClick={() => deleteReview(review.id)}
                                  className="px-3 py-1.5 rounded-lg bg-secondary/20 text-secondary font-mono text-xs hover:bg-secondary/30 transition-colors"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Public Reviews Grid */}
        {approvedReviews.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">💬</div>
            <p className="font-display font-700 text-white text-2xl mb-2">No Reviews Yet</p>
            <p className="text-white/40 font-mono text-sm mb-8">Be the first to leave a review!</p>
            <button onClick={() => setShowForm(true)} className="btn-primary">Add First Review</button>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvedReviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-white/15 transition-all duration-300 hover:bg-white/[0.02] flex flex-col"
              >
                <div className="text-2xl mb-4 text-primary opacity-50">"</div>
                <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">{review.message}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-display font-800 text-primary text-sm">
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-display font-700 text-white text-sm">{review.name}</p>
                      <p className="text-white/40 text-xs">{review.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm">{'⭐'.repeat(review.rating)}</div>
                    <p className="text-white/30 text-xs font-mono mt-0.5">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
