

export default function Home() {
  
  return (
<main className="flex items-center justify-center min-h-screen bg-background">
  <section className="bg-white rounded-lg shadow-lg w-96 p-5">
    <header className="flex justify-between text-text text-sm font-bold">
      <time>Tue Feb 18 2025</time>
      <span>9:31:25 p.m.</span>
    </header>
    
    <h1 className="text-lg font-bold text-primary mt-2">List Tailwind</h1>
    
    <nav className="grid grid-cols-7 text-center text-text mt-3">
      <span className="text-xs font-semibold">s</span>
      <span className="text-xs font-semibold">m</span>
      <span className="text-xs font-semibold">t</span>
      <span className="text-xs font-semibold">w</span>
      <span className="text-xs font-semibold">t</span>
      <span className="text-xs font-semibold">f</span>
      <span className="text-xs font-semibold">s</span>
      <span className="text-sm font-medium">24</span>
      <span className="text-sm font-medium">25</span>
      <span className="text-sm font-medium">26</span>
      <span className="text-sm font-medium">27</span>
      <span className="text-sm font-medium">28</span>
      <span className="text-sm font-medium">29</span>
      <span className="text-sm font-medium">30</span>
    </nav>

    <ul className="mt-3 space-y-3">
      <li className="flex items-center gap-3">
        <div className="flex items-center bg-secondary p-3 rounded-md flex-1">
          <div className="flex items-center gap-3 w-full">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-secondary bg-accent">
              <svg className="w-4 h-4 text-accent-foreground" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
            </span>
            <span className="text-sm font-medium text-primary line-through opacity-50">
              take out the trash
            </span>
          </div>
        </div>
        <div className="bg-secondary p-3 rounded-md">
          <time className="text-sm font-semibold text-primary">9:00 AM</time>
        </div>
      </li>

      <li className="flex items-center gap-3">
        <div className="flex items-center bg-secondary p-3 rounded-md flex-1">
          <div className="flex items-center gap-3 w-full">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-secondary bg-accent">
              <svg className="w-4 h-4 text-accent-foreground" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
            </span>
            <span className="text-sm font-medium text-primary line-through opacity-50">
              do homework
            </span>
          </div>
        </div>
        <div className="bg-secondary p-3 rounded-md">
          <time className="text-sm font-semibold text-primary">12:00 PM</time>
        </div>
      </li>

      <li className="flex items-center gap-3">
        <div className="flex items-center bg-secondary p-3 rounded-md flex-1">
          <div className="flex items-center gap-3 w-full">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-secondary bg-white">
            </span>
            <span className="text-sm font-medium text-primary">
              go to grocery store
            </span>
          </div>
        </div>
        <div className="bg-secondary p-3 rounded-md">
          <time className="text-sm font-semibold text-primary">1:00 PM</time>
        </div>
      </li>

      <li className="flex items-center gap-3">
        <div className="flex items-center bg-secondary p-3 rounded-md flex-1">
          <div className="flex items-center gap-3 w-full">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-secondary bg-white">
            </span>
            <span className="text-sm font-medium text-primary">
              run 5 kilometers
            </span>
          </div>
        </div>
        <div className="bg-secondary p-3 rounded-md">
          <time className="text-sm font-semibold text-primary">4:20 PM</time>
        </div>
      </li>

      <li className="flex items-center gap-3">
        <div className="flex items-center bg-secondary p-3 rounded-md flex-1">
          <div className="flex items-center gap-3 w-full">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-secondary bg-white">
            </span>
            <span className="text-sm font-medium text-primary">
              load the dishwasher
            </span>
          </div>
        </div>
        <div className="bg-secondary p-3 rounded-md">
          <time className="text-sm font-semibold text-primary">9:00 PM</time>
        </div>
      </li>
    </ul>
  </section>
</main>

  );
}