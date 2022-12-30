import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

const projectRoot = __dirname

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(projectRoot, "src"),
  build: {
    outDir: path.resolve(projectRoot, "dist"),
    emptyOutDir: true,
  },
  plugins: [react()],
})
