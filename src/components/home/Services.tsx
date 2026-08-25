export default function Services() {
  return (
    <section className="section alt" id="services" aria-labelledby="svc-h">
      <div className="container">
        {/* Centered Intro Header */}
        <div className="reveal mb-24 lg:mb-32 flex flex-col items-center">
          <h2 className="heading mb-6 text-center">
            Our digital marketing <span className="serif">services.</span>
          </h2>
          <p
            className="body-text text-center mx-auto max-w-[680px]"
            style={{ color: "var(--c-body)" }}
          >
            Design, development and marketing under one roof. One team takes
            your project from the first wireframe to the first page of Google
            and stays on after launch.
          </p>
        </div>
        

        {/* Premium Card Grid */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" style={{ marginTop: "40px" }}>
          {/* Card 1 */}
          <a
            href="/contact"
            className="flex flex-col p-8 lg:p-10 bg-[var(--c-bg)] border border-[var(--c-line)] rounded-3xl transition-all duration-300 hover:border-[var(--c-green)] hover:-translate-y-2  hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] group"
          >
            <div className="mb-5 w-14 h-14 flex items-center justify-center rounded-2xl bg-[#21759B]/10 transition-transform duration-300 group-hover:scale-110">
              <svg
                className="w-7 h-7"
                aria-hidden={true}
                focusable="false"
                viewBox="0 0 24 24"
                fill="#21759B"
              >
                <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"></path>
              </svg>
            </div>
            <h3
              className="text-[22px] font-semibold mb-4 leading-tight"
              style={{ color: "var(--c-ink)" }}
            >
              Hire WordPress Developer
            </h3>
            <p
              className="text-[16px] leading-relaxed mb-8 flex-grow"
              style={{ color: "var(--c-secondary)" }}
            >
              Hire a WordPress developer for custom themes, plugins, and
              WooCommerce stores, built clean without the usual plugin bloat.
            </p>
            <span
              className="text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 mt-auto transition-colors duration-300"
              style={{ color: "var(--c-green-link)" }}
            >
              Explore{" "}
              <span
                aria-hidden={true}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </span>
          </a>

          {/* Card 2 */}
          <a
            href="/contact"
            className="flex flex-col p-8 lg:p-10 bg-[var(--c-bg)] border border-[var(--c-line)] rounded-3xl transition-all duration-300 hover:border-[var(--c-green)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] group"
          >
            <div className="mb-5 w-14 h-14 flex items-center justify-center rounded-2xl bg-[#7AB55C]/10 transition-transform duration-300 group-hover:scale-110">
              <svg
                className="w-7 h-7"
                aria-hidden={true}
                focusable="false"
                viewBox="0 0 24 24"
                fill="#7AB55C"
              >
                <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"></path>
              </svg>
            </div>
            <h3
              className="text-[22px] font-semibold mb-4 leading-tight"
              style={{ color: "var(--c-ink)" }}
            >
              Hire Shopify Developer
            </h3>
            <p
              className="text-[16px] leading-relaxed mb-8 flex-grow"
              style={{ color: "var(--c-secondary)" }}
            >
              Shopify development services for custom storefronts and conversion
              focused ecommerce stores that actually sell.
            </p>
            <span
              className="text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 mt-auto transition-colors duration-300"
              style={{ color: "var(--c-green-link)" }}
            >
              Explore{" "}
              <span
                aria-hidden={true}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </span>
          </a>

          {/* Card 3 */}
          <a
            href="/contact"
            className="flex flex-col p-8 lg:p-10 bg-[var(--c-bg)] border border-[var(--c-line)] rounded-3xl transition-all duration-300 hover:border-[var(--c-green)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] group"
          >
            <div className="mb-5 w-14 h-14 flex items-center justify-center rounded-2xl bg-[#61DAFB]/10 transition-transform duration-300 group-hover:scale-110">
              <svg
                className="w-7 h-7"
                aria-hidden={true}
                focusable="false"
                viewBox="0 0 24 24"
                fill="#61DAFB"
              >
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
              </svg>
            </div>
            <h3
              className="text-[22px] font-semibold mb-4 leading-tight"
              style={{ color: "var(--c-ink)" }}
            >
              Custom SaaS Applications
            </h3>
            <p
              className="text-[16px] leading-relaxed mb-8 flex-grow"
              style={{ color: "var(--c-secondary)" }}
            >
              Custom SaaS application development, from web portals and
              dashboards to internal tools on React and Next.js.
            </p>
            <span
              className="text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 mt-auto transition-colors duration-300"
              style={{ color: "var(--c-green-link)" }}
            >
              Explore{" "}
              <span
                aria-hidden={true}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </span>
          </a>

          {/* Card 4 */}
          <a
            href="/contact"
            className="flex flex-col p-8 lg:p-10 bg-[var(--c-bg)] border border-[var(--c-line)] rounded-3xl transition-all duration-300 hover:border-[var(--c-green)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] group"
          >
            <div className="mb-5 w-14 h-14 flex items-center justify-center rounded-2xl bg-[#FF642D]/10 transition-transform duration-300 group-hover:scale-110">
              <svg
                className="w-7 h-7"
                aria-hidden={true}
                focusable="false"
                viewBox="0 0 24 24"
                fill="#FF642D"
              >
                <path d="M20.698 11.911c0 .444-.226.516-.79.516-.596 0-.706-.1-.77-.554-.118-1.152-.896-2.13-2.201-2.24-.418-.034-.518-.19-.518-.706 0-.48.074-.708.446-.708 2.265.01 3.833 1.832 3.833 3.69v.002zm3.3 0c0-3.456-2.338-7.11-7.74-7.11H5.52c-.218 0-.354.11-.354.31 0 .109.082.209.156.26.388.31.97.654 1.73 1.036.743.372 1.323.616 1.903.852.246.1.336.208.336.344 0 .19-.136.308-.4.308H.372c-.254 0-.372.164-.372.326 0 .136.044.254.162.372.69.726 1.796 1.596 3.4 2.604 1.466.91 2.98 1.74 4.533 2.492.236.11.308.236.308.372-.008.154-.126.28-.4.28H4.1c-.216 0-.344.12-.344.3 0 .1.08.226.19.326.888.808 2.311 1.688 4.207 2.494 2.53 1.08 5.094 1.721 7.98 1.721 5.465 0 7.867-4.087 7.867-7.289l-.002.002zm-7.133 5.104c-2.794 0-5.132-2.276-5.132-5.114 0-2.794 2.33-5.04 5.132-5.04 2.863 0 5.111 2.24 5.111 5.04a5.086 5.086 0 0 1-5.111 5.114z"></path>
              </svg>
            </div>
            <h3
              className="text-[22px] font-semibold mb-4 leading-tight"
              style={{ color: "var(--c-ink)" }}
            >
              Search Engine Optimization
            </h3>
            <p
              className="text-[16px] leading-relaxed mb-8 flex-grow"
              style={{ color: "var(--c-secondary)" }}
            >
              Search engine optimization that earns rankings, from technical SEO
              and on page SEO to ecommerce SEO.
            </p>
            <span
              className="text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 mt-auto transition-colors duration-300"
              style={{ color: "var(--c-green-link)" }}
            >
              Explore{" "}
              <span
                aria-hidden={true}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </span>
          </a>

          {/* Card 5 */}
          <a
            href="/contact"
            className="flex flex-col p-8 lg:p-10 bg-[var(--c-bg)] border border-[var(--c-line)] rounded-3xl transition-all duration-300 hover:border-[var(--c-green)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] group"
          >
            <div className="mb-5 w-14 h-14 flex items-center justify-center rounded-2xl bg-[#FF0069]/10 transition-transform duration-300 group-hover:scale-110">
              <svg
                className="w-7 h-7"
                aria-hidden={true}
                focusable="false"
                viewBox="0 0 24 24"
                fill="#FF0069"
              >
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"></path>
              </svg>
            </div>
            <h3
              className="text-[22px] font-semibold mb-4 leading-tight"
              style={{ color: "var(--c-ink)" }}
            >
              Social Media Marketing
            </h3>
            <p
              className="text-[16px] leading-relaxed mb-8 flex-grow"
              style={{ color: "var(--c-secondary)" }}
            >
              Social media marketing and management, from content and creative
              to community and clear monthly reporting.
            </p>
            <span
              className="text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 mt-auto transition-colors duration-300"
              style={{ color: "var(--c-green-link)" }}
            >
              Explore{" "}
              <span
                aria-hidden={true}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </span>
          </a>

          {/* Card 6 */}
          <a
            href="/contact"
            className="flex flex-col p-8 lg:p-10 bg-[var(--c-bg)] border border-[var(--c-line)] rounded-3xl transition-all duration-300 hover:border-[var(--c-green)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] group"
          >
            <div className="mb-5 w-14 h-14 flex items-center justify-center rounded-2xl bg-[#96588A]/10 transition-transform duration-300 group-hover:scale-110">
              <svg
                className="w-7 h-7"
                aria-hidden={true}
                focusable="false"
                viewBox="0 0 24 24"
                fill="#96588A"
              >
                <path d="M2.2261 4.8552A2.2261 2.2261 0 0 0 0 7.0931V14.5479C0 15.7879 1.0009 16.7858 2.2379 16.7858H11.4937L15.7185 19.1448 14.7561 16.7858H21.7621A2.235 2.235 0 0 0 24 14.5479V7.0931A2.235 2.235 0 0 0 21.7621 4.8552H2.2261ZM10.2242 6.169H10.3127C10.5046 6.172 10.6788 6.2369 10.8412 6.3668A0.7676 0.7676 0 0 1 11.1453 6.9278 0.8562 0.8562 0 0 1 11.0479 7.4002C10.6641 8.1058 10.3511 9.2897 10.0972 10.9401 9.8522 12.5373 9.7606 13.7891 9.8197 14.6808A1.1573 1.1573 0 0 1 9.7045 15.3273 0.6289 0.6289 0 0 1 9.1849 15.6816C8.931 15.6993 8.6623 15.5812 8.4084 15.3155 7.4932 14.3826 6.7699 12.9891 6.2384 11.135 5.6007 12.3897 5.1313 13.3315 4.8272 13.9604 4.2485 15.0705 3.7555 15.6373 3.3451 15.6669 3.0794 15.6875 2.855 15.4632 2.6572 14.9937 2.1553 13.7065 1.6179 11.2235 1.0393 7.5419A0.8769 0.8769 0 0 1 1.1987 6.8865C1.3375 6.6975 1.5412 6.606 1.8187 6.5853 2.3177 6.5469 2.6011 6.7772 2.669 7.288 2.9731 9.3399 3.3097 11.0789 3.661 12.5019L5.8074 8.4069C6.0022 8.0349 6.2502 7.8401 6.5455 7.8194 6.9765 7.7899 7.2452 8.0645 7.3515 8.6461 7.5965 9.9481 7.9065 11.0582 8.2815 12 8.5354 9.5082 8.9694 7.7102 9.5805 6.603A0.7529 0.7529 0 0 1 10.2242 6.169ZM14.0416 7.2319C14.2069 7.2319 14.3841 7.2496 14.573 7.2909 15.258 7.4386 15.7865 7.8135 16.1378 8.4306 16.4537 8.962 16.6131 9.5968 16.6131 10.3614 16.6131 11.3741 16.3563 12.2923 15.8455 13.1367 15.255 14.1169 14.4904 14.6129 13.5397 14.6129A2.5981 2.5981 0 0 1 13.0083 14.5479 2.2527 2.2527 0 0 1 11.4405 13.4142 3.7997 3.7997 0 0 1 10.9741 11.4686C10.9741 10.4589 11.225 9.5348 11.7358 8.7022 12.3322 7.719 13.0998 7.2319 14.0386 7.2319ZM20.1944 7.2319C20.3597 7.2319 20.5368 7.2496 20.7258 7.2909 21.4226 7.4386 21.9392 7.8135 22.2906 8.4306 22.6065 8.962 22.7629 9.5968 22.7629 10.3614 22.7629 11.3741 22.509 12.2923 21.9983 13.1367 21.4078 14.1169 20.6431 14.6129 19.6925 14.6129A2.5981 2.5981 0 0 1 19.161 14.5479 2.2527 2.2527 0 0 1 17.5933 13.4142 3.7997 3.7997 0 0 1 17.1209 11.4686C17.1209 10.4589 17.3778 9.5348 17.8886 8.7022 18.4849 7.719 19.2526 7.2319 20.1914 7.2319ZM14.0888 8.8734C13.7818 8.8734 13.4836 9.0771 13.2002 9.4964A3.1827 3.1827 0 0 0 12.6097 11.383C12.6097 11.6664 12.6687 11.9734 12.7868 12.2775 12.9315 12.6613 13.1323 12.8621 13.3655 12.9123 13.6105 12.9595 13.8763 12.8532 14.1626 12.5993 14.5258 12.2746 14.7679 11.7933 14.9066 11.1468 14.9539 10.9194 14.9745 10.6744 14.9745 10.4205 14.9745 10.1341 14.9155 9.83 14.7974 9.5259 14.6498 9.1421 14.4549 8.9413 14.2187 8.8911A0.7263 0.7263 0 0 0 14.0859 8.8734ZM20.2387 8.8734C19.9346 8.8734 19.6364 9.0771 19.3529 9.4964A3.1827 3.1827 0 0 0 18.7625 11.383C18.7625 11.6664 18.8215 11.9734 18.9396 12.2775 19.0843 12.6613 19.285 12.8621 19.5183 12.9123 19.7633 12.9595 20.029 12.8532 20.3154 12.5993 20.6786 12.2746 20.9207 11.7933 21.0594 11.1468 21.0978 10.9194 21.1273 10.6744 21.1273 10.4205 21.1273 10.1341 21.0683 9.83 20.9502 9.5259 20.8026 9.1421 20.6077 8.9413 20.3715 8.8911A0.7263 0.7263 0 0 0 20.2387 8.8734Z"></path>
              </svg>
            </div>
            <h3
              className="text-[22px] font-semibold mb-4 leading-tight"
              style={{ color: "var(--c-ink)" }}
            >
              WooCommerce development
            </h3>
            <p
              className="text-[16px] leading-relaxed mb-8 flex-grow"
              style={{ color: "var(--c-secondary)" }}
            >
              WooCommerce development stores that convert, from custom product
              setups and fast checkouts to trusted payment gateway integration.
            </p>
            <span
              className="text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 mt-auto transition-colors duration-300"
              style={{ color: "var(--c-green-link)" }}
            >
              Explore{" "}
              <span
                aria-hidden={true}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
