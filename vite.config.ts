import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

import path from 'path'

const resolvePath = (dir: string) => {
  return path.resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': resolvePath('src'),
      '@comp': resolvePath('src/components')
    }
  }
})
