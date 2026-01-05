<template>
  <UApp>
    <div class="min-h-screen bg-white">
      <!-- Hero Section -->
      <section class="py-20 md:py-32">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <img
            src="/cover.jpg"
            alt="Ground Floor Government Podcast"
            class="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-2xl shadow-lg mb-10"
          />
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ground Floor Government
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stories from the professionals who keep local government running.
          </p>
        </div>
      </section>

      <!-- About Section -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-3xl mx-auto px-6">
          <p class="text-lg text-gray-700 leading-relaxed text-center">
            City and county clerks, IT leads, communication pros, and public servants share their stories about meeting preparation, technology transitions, team leadership, and the important work of government transparency.
          </p>
        </div>
      </section>

      <!-- Listen Section -->
      <section class="py-20">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <h2 class="text-2xl font-semibold text-gray-900 mb-10">
            Listen Now
          </h2>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
              to="https://podcasts.apple.com/us/podcast/ground-floor-government/id1831247135"
              target="_blank"
              size="xl"
              color="neutral"
              variant="solid"
              class="px-8"
            >
              <template #leading>
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001 2C6.479 2 2 6.478 2 12c0 4.036 2.395 7.507 5.843 9.088.048-.71.124-1.802.253-2.567.12-.707.774-4.524.774-4.524s-.198-.396-.198-.98c0-.919.533-1.605 1.197-1.605.565 0 .838.424.838.933 0 .569-.362 1.42-.549 2.209-.156.661.331 1.2.983 1.2 1.18 0 2.087-1.243 2.087-3.038 0-1.588-1.141-2.699-2.772-2.699-1.888 0-2.996 1.416-2.996 2.88 0 .57.22 1.183.494 1.515.054.066.062.124.046.191-.05.211-.163.66-.185.752-.029.121-.096.147-.222.089-.828-.386-1.346-1.598-1.346-2.574 0-2.096 1.523-4.02 4.393-4.02 2.307 0 4.099 1.643 4.099 3.839 0 2.292-1.445 4.137-3.452 4.137-.674 0-1.308-.35-1.524-.764l-.414 1.579c-.15.578-.554 1.303-.825 1.745A10.001 10.001 0 0 0 22 12c0-5.522-4.477-10-9.999-10z"/>
                </svg>
              </template>
              Apple Podcasts
            </UButton>
            <UButton
              to="https://open.spotify.com/show/2Hbmb0EXpQtsbqkltovy6l"
              target="_blank"
              size="xl"
              color="neutral"
              variant="outline"
              class="px-8"
            >
              <template #leading>
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </template>
              Spotify
            </UButton>
          </div>
        </div>
      </section>

      <!-- Host Section -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-3xl mx-auto px-6 text-center">
          <p class="text-gray-600">
            Hosted by <span class="font-medium text-gray-900">Hugh Plappert</span>
          </p>
          <p class="text-gray-500 mt-2">
            CRO of <a href="https://phonelive.io" target="_blank" class="text-gray-700 hover:text-gray-900 underline underline-offset-2">PhoneLive.io</a>
          </p>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-10 border-t border-gray-200">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <p class="text-sm text-gray-500">
            &copy; {{ new Date().getFullYear() }} Ground Floor Government. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  </UApp>
</template>
