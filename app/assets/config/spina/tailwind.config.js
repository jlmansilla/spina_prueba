module.exports = {
  content: [
    '/home/ubuntu/.rvm/gems/ruby-3.2.0/gems/spina-2.13.1/app/views/**/*.*',
'/home/ubuntu/.rvm/gems/ruby-3.2.0/gems/spina-2.13.1/app/components/**/*.*',
'/home/ubuntu/.rvm/gems/ruby-3.2.0/gems/spina-2.13.1/app/helpers/**/*.*',
'/home/ubuntu/.rvm/gems/ruby-3.2.0/gems/spina-2.13.1/app/assets/javascripts/**/*.js',
'/home/ubuntu/.rvm/gems/ruby-3.2.0/gems/spina-2.13.1/app/**/application.tailwind.css'
  ],
  theme: {
    fontFamily: {
      body: ['Metropolis'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace']
    },
    extend: {
      colors: {
        spina: {
          light: '#797ab8',
          DEFAULT: '#6865b4',
          dark: '#3a3a70'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
	require('@tailwindcss/aspect-ratio'),
	require('@tailwindcss/typography')
  ]
}
