const CertificationSection = () => {
  return (
    <section id="certificates" className="py-24">
      <div className="section-container">
        {/* <div className="max-w-4xl mx-auto"> */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Verified Achievements & Professional{" "}
          <span className="text-teal">Milestones</span>
        </h2>
        <div className="grid gap-3 space-y-5 md:space-y-0 xl:space-y-0 md:grid-cols-2 xl:grid-cols-3 md:gap-3 lg:gap-5 items-stretch">
          <div
            className="
                border border-[1px] dark:text-light/90 h-full py-4 lg:pt-6 min-h-[450px] 
                duration-500 transition-shadow bg-light dark:bg-dark 
                border-border dark:border-border-dark 
                rounded-md certificate-animate 
                hover:shadow-2xl hover:shadow-green-600/30 hover:border-green-600
                will-change-transform opacity-100
            "
          >
            <div className="flex justify-between">
              <div className="mb-4 px-4 flex-3/4">
                <h4 className="font-anton text-xl lg:text-2xl">
                  Namaste React
                </h4>
                <p className="block mt-1 text-secondary dark:text-blue-400">
                  Akshay Saini
                </p>
              </div>
              <div className="md:w-12 md:h-12 w-11 h-11 mb-4 mt-1 mr-2 rounded-md overflow-hidden">
                <img
                  alt="NamasteDev.com"
                  className="w-full h-full"
                  src="https://avatars.githubusercontent.com/u/118036704?s=200&v=4"
                />
              </div>
            </div>
            <div className="space-y-2 px-4">
              <p className="flex gap-2 font-anton text-lg">Skills</p>
              <ul className="flex items-center gap-2 flex-wrap text-sm">
                <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                  React Hooks
                </li>
                <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                  State Management
                </li>
                <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                  Redux
                </li>
                <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                  React Router
                </li>
                <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                  React Testing Library
                </li>
                <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                  Jest
                </li>
                <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                  Tailwind CSS
                </li>
              </ul>
            </div>
            <hr className="text-border dark:text-border-dark mt-4" />
            <div className="grid text-sm">
              <img className="aspect-4/3" src={`${import.meta.env.BASE_URL}/React_Certificate.png`} />
            </div>
            <hr className="text-border dark:text-border-dark mb-4" />
            <div className="flex justify-between flex-wrap px-4">
              <div className="flex items-start">
                <a
                  className="font-anton flex items-center gap-2"
                  href="https://namastedev.com/vwaikar007/certificates/namaste-react"
                  title="View Certificate"
                  target="_blank"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="scale-125"
                  >
                    <path
                      d="M11.1459 7.02251C11.5259 6.34084 11.7159 6 12 6C12.2841 6 12.4741 6.34084 12.8541 7.02251L12.9524 7.19887C13.0603 7.39258 13.1143 7.48944 13.1985 7.55334C13.2827 7.61725 13.3875 7.64097 13.5972 7.68841L13.7881 7.73161C14.526 7.89857 14.895 7.98205 14.9828 8.26432C15.0706 8.54659 14.819 8.84072 14.316 9.42898L14.1858 9.58117C14.0429 9.74833 13.9714 9.83191 13.9392 9.93531C13.9071 10.0387 13.9179 10.1502 13.9395 10.3733L13.9592 10.5763C14.0352 11.3612 14.0733 11.7536 13.8435 11.9281C13.6136 12.1025 13.2682 11.9435 12.5773 11.6254L12.3986 11.5431C12.2022 11.4527 12.1041 11.4075 12 11.4075C11.8959 11.4075 11.7978 11.4527 11.6014 11.5431L11.4227 11.6254C10.7318 11.9435 10.3864 12.1025 10.1565 11.9281C9.92674 11.7536 9.96476 11.3612 10.0408 10.5763L10.0605 10.3733C10.0821 10.1502 10.0929 10.0387 10.0608 9.93531C10.0286 9.83191 9.95713 9.74833 9.81418 9.58117L9.68403 9.42898C9.18097 8.84072 8.92945 8.54659 9.01723 8.26432C9.10501 7.98205 9.47396 7.89857 10.2119 7.73161L10.4028 7.68841C10.6125 7.64097 10.7173 7.61725 10.8015 7.55334C10.8857 7.48944 10.9397 7.39258 11.0476 7.19887L11.1459 7.02251Z"
                      stroke="currentColor"
                    ></path>
                    <path
                      d="M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z"
                      stroke="currentColor"
                    ></path>
                    <path
                      d="M12 16.0678L8.22855 19.9728C7.68843 20.5321 7.41837 20.8117 7.18967 20.9084C6.66852 21.1289 6.09042 20.9402 5.81628 20.4602C5.69597 20.2495 5.65848 19.8695 5.5835 19.1095C5.54117 18.6804 5.52 18.4658 5.45575 18.2861C5.31191 17.8838 5.00966 17.5708 4.6211 17.4219C4.44754 17.3554 4.24033 17.3335 3.82589 17.2896C3.09187 17.212 2.72486 17.1732 2.52138 17.0486C2.05772 16.7648 1.87548 16.1662 2.08843 15.6266C2.18188 15.3898 2.45194 15.1102 2.99206 14.5509L5.45575 12"
                      stroke="currentColor"
                    ></path>
                    <path
                      d="M12 16.0678L15.7715 19.9728C16.3116 20.5321 16.5816 20.8117 16.8103 20.9084C17.3315 21.1289 17.9096 20.9402 18.1837 20.4602C18.304 20.2495 18.3415 19.8695 18.4165 19.1095C18.4588 18.6804 18.48 18.4658 18.5442 18.2861C18.6881 17.8838 18.9903 17.5708 19.3789 17.4219C19.5525 17.3554 19.7597 17.3335 20.1741 17.2896C20.9081 17.212 21.2751 17.1732 21.4786 17.0486C21.9423 16.7648 22.1245 16.1662 21.9116 15.6266C21.8181 15.3898 21.5481 15.1102 21.0079 14.5509L18.5442 12"
                      stroke="currentColor"
                    ></path>
                  </svg>
                  Certificate
                </a>
              </div>
              <small>
                <strong>Issued</strong>: Feb 11, 2025
              </small>
            </div>
          </div>
          <div
          className="
                border border-[1px] dark:text-light/90 h-fit py-4 lg:pt-6 min-h-[450px] 
                duration-500 transition-shadow bg-light dark:bg-dark 
                border-border dark:border-border-dark 
                rounded-md certificate-animate 
                hover:shadow-2xl hover:shadow-blue-600/30 hover:border-blue-600
                will-change-transform opacity-100
            "
        >
          <div className="flex justify-between">
            <div className="mb-4 px-4 flex-3/4">
              <h4 className="font-anton text-xl lg:text-2xl">
                Agentic AI Engineering
              </h4>
              <p className="block mt-1 text-secondary dark:text-blue-400">
                Ed Donner
              </p>
            </div>
            <div className="md:w-12 md:h-12 w-11 h-11 mb-4 mt-1 mr-2 rounded-md overflow-hidden">
              <img
                alt="Udemy"
                className="w-full h-full"
                src={`${import.meta.env.BASE_URL}/Udemy_Logo.png`}
              />
            </div>
          </div>
          <div className="space-y-2 px-4">
            <p className="flex gap-2 font-anton text-lg">Skills</p>
            <ul className="flex items-center gap-2 flex-wrap text-sm">
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                AI Agents
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                OpenAI Agents SDK
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                CrewAI
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                Autogen
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                MCP
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                LangGraph
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                Multi-Agent Systems
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                Autonomous Workflows
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                Gradio
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
                Python
              </li>
            </ul>
          </div>
          <hr className="text-border dark:text-border-dark mt-4" />
          <div className="grid text-sm">
            <img className="aspect-4/2" src={`${import.meta.env.BASE_URL}/working.svg`}/>
          </div>
          <hr className="text-border dark:text-border-dark mb-4" />
            <div className="flex justify-between flex-wrap px-4">
            <div className="flex items-start">
              <a
                className="font-anton flex items-center gap-2"
                href="https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/"
                title="View Course"
                target="_blank"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-125"
                >
                  <path
                    d="M9.78272 3.49965C11.2037 2.83345 12.7962 2.83345 14.2172 3.49965L20.9084 6.63664C22.3639 7.31899 22.3639 9.68105 20.9084 10.3634L14.2173 13.5004C12.7963 14.1665 11.2038 14.1665 9.78281 13.5004L3.0916 10.3634C1.63613 9.68101 1.63614 7.31895 3.0916 6.63659L9.78272 3.49965Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M2 8.5V14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M19 11.5V16.6254C19 17.6334 18.4965 18.5772 17.6147 19.0656C16.1463 19.8787 13.796 21 12 21C10.204 21 7.8537 19.8787 6.38533 19.0656C5.5035 18.5772 5 17.6334 5 16.6254V11.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
                Course
              </a>
            </div>
            <i>Learning in Progress</i>
          </div>
        </div>
        <div
          className="
                border border-[1px] dark:text-light/90 h-full py-4 lg:pt-6 min-h-[450px] 
                duration-500 transition-shadow bg-light dark:bg-dark 
                border-border dark:border-border-dark 
                rounded-md certificate-animate 
                hover:shadow-2xl hover:shadow-blue-600/30 hover:border-blue-600
                will-change-transform opacity-100
            "
        >
          <div className="flex justify-between">
            <div className="mb-4 px-4 flex-3/4">
              <h4 className="font-anton text-xl lg:text-2xl">
                n8n - AI Agents, AI Automations & AI Voice Agents
              </h4>
              <p className="block mt-1 text-secondary dark:text-blue-400">
                Damian Danelczyk, Krystian Wojtarowicz, DFA Course Academy
              </p>
            </div>
            <div className="md:w-12 md:h-12 w-11 h-11 mb-4 mt-1 mr-2 rounded-md overflow-hidden">
              <img
                alt="Udemy"
                className="w-full h-full"
                src={`${import.meta.env.BASE_URL}/Udemy_Logo.png`}
              />
            </div>
          </div>
          <div className="space-y-2 px-4">
            <p className="flex gap-2 font-anton text-lg">Skills</p>
            <ul className="flex items-center gap-2 flex-wrap text-sm">
            <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
              n8n
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
              Prompt Engineering
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
              VAPI 
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
              Supabase
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
              Pinecone
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
              RAG
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
              Retell AI 
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
              Eleven Labs
              </li>
              <li className="border border-border dark:border-border-dark px-2 py-1 rounded-md">
              LLM
              </li>
            </ul>
          </div>
          <hr className="text-border dark:text-border-dark mt-4" />
          <div className="grid text-sm">
            <img className="aspect-4/2" src={`${import.meta.env.BASE_URL}/working.svg`} />
          </div>
          <hr className="text-border dark:text-border-dark mb-4" />
          <div className="flex justify-between flex-wrap px-4">
            <div className="flex items-start">
              <a
                className="font-anton flex items-center gap-2"
                href="https://www.udemy.com/course/n8n-course/"
                title="View Course"
                target="_blank"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-125"
                >
                  <path
                    d="M9.78272 3.49965C11.2037 2.83345 12.7962 2.83345 14.2172 3.49965L20.9084 6.63664C22.3639 7.31899 22.3639 9.68105 20.9084 10.3634L14.2173 13.5004C12.7963 14.1665 11.2038 14.1665 9.78281 13.5004L3.0916 10.3634C1.63613 9.68101 1.63614 7.31895 3.0916 6.63659L9.78272 3.49965Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M2 8.5V14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M19 11.5V16.6254C19 17.6334 18.4965 18.5772 17.6147 19.0656C16.1463 19.8787 13.796 21 12 21C10.204 21 7.8537 19.8787 6.38533 19.0656C5.5035 18.5772 5 17.6334 5 16.6254V11.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
                Course
              </a>
            </div>
            <i>Learning in Progress</i>
          </div>
        </div>
        </div>

        {/* </div> */}
        
      </div>
    </section>
  );
};

export default CertificationSection;
