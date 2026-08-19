import { MapPin, Navigation } from "lucide-react";

interface Branch {
  _id: string;
  name?: string;
  address?: string;
}

interface ContactMapProps {
  branches?: Branch[];
}

const ContactMap = ({ branches = [] }: ContactMapProps) => {
  return (
    <section className="pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-5">

        <div className="mb-8">
          <span
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.2em]
              text-[var(--primary-color)]
            "
          >
            Find Us
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Visit Our Locations
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Map placeholder */}
          <div
            className="
              flex
              min-h-[380px]
              items-center
              justify-center
              overflow-hidden
              rounded-3xl
              border
              border-[var(--primary-color)]/10
              bg-[var(--card-color)]
              shadow-lg
            "
          >
            <div className="text-center">

              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[var(--primary-color)]/10
                  text-[var(--primary-color)]
                "
              >
                <MapPin size={30} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Our Locations
              </h3>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[var(--text-color)]/50">
                Our location map will appear here once branch
                address information is available.
              </p>

            </div>
          </div>

          {/* Branches */}
          <div className="space-y-4">

            {branches.length > 0 ? (
              branches.map((branch, index) => (
                <div
                  key={branch._id}
                  className="
                    rounded-2xl
                    border
                    border-[var(--primary-color)]/10
                    bg-[var(--card-color)]
                    p-5
                    shadow-sm
                  "
                >
                  <div className="flex items-start gap-4">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[var(--primary-color)]/10
                        text-[var(--primary-color)]
                      "
                    >
                      <MapPin size={20} />
                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--primary-color)]">
                        Branch {index + 1}
                      </p>

                      <h3 className="mt-1 text-lg font-bold">
                        {branch.name || "Restaurant Branch"}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[var(--text-color)]/60">
                        {branch.address || "Address unavailable"}
                      </p>

                    </div>

                    {branch.address && (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          branch.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[var(--button-color)]
                          text-[var(--button-text-color)]
                          transition
                          hover:bg-[var(--primary-color)]
                          hover:text-[var(--background-color)]
                        "
                        aria-label={`Open ${branch.name || "branch"} in maps`}
                      >
                        <Navigation size={17} />
                      </a>
                    )}

                  </div>
                </div>
              ))
            ) : (
              <div
                className="
                  rounded-2xl
                  border
                  border-[var(--primary-color)]/10
                  bg-[var(--card-color)]
                  p-8
                  text-center
                "
              >
                <MapPin
                  size={28}
                  className="mx-auto text-[var(--primary-color)]"
                />

                <p className="mt-4 font-semibold">
                  Branch information unavailable
                </p>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMap;