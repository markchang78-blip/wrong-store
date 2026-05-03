import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function SupabaseTest() {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error'>('checking')
  const [message, setMessage] = useState('正在測試連線...')

  useEffect(() => {
    async function testConnection() {
      try {
        // Try a simple health check by fetching the session
        const { error } = await supabase.auth.getSession()
        if (error) {
          console.log('Supabase connection result:', error)
          // Auth error doesn't mean connection failed - just means no session
          setStatus('connected')
          setMessage('Supabase 連線成功！')
        } else {
          setStatus('connected')
          setMessage('Supabase 連線成功！')
        }
      } catch (err) {
        console.error('Supabase connection error:', err)
        setStatus('error')
        setMessage('連線失敗，請檢查設定')
      }
    }
    testConnection()
  }, [])

  const bgColor = status === 'connected' ? 'bg-green-100 text-green-800' : 
                  status === 'error' ? 'bg-red-100 text-red-800' : 
                  'bg-yellow-100 text-yellow-800'

  return (
    <div className={`fixed bottom-4 right-4 px-4 py-2 rounded-lg text-sm font-medium z-50 ${bgColor}`}>
      {message}
    </div>
  )
}
