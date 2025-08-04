import { BsCheckCircle } from "react-icons/bs";

const steps = ["Location", "Car", "Details", "Payment"];

const StepProgress = ({ step }) => {
  return (
    <div className="d-flex flex-md-row flex-wrap justify-content-between gap-xl-5 steps mx-auto  mt-5 mx-auto  mb-xl-5 mb-3" style={{ maxWidth: "967.09px" }}>
      {steps.map((label, idx) => {
        const current = idx + 1;
        const isActive = step >= current;

        return (
          <div key={label} className="d-flex align-items-center gap-2">
            <div
              className={`rounded-circle d-flex align-items-center justify-content-center fs-2 font-regular  text-dark border-dark border-1 border `}
              style={{
                width: 70,
                height: 70,
              }}
            >
              {isActive ? <img src="./icons/svgs/check.svg" height={40} className="fw-light" /> : current}
            </div>
            <div className="mt-2 fs-4 font-regular ">{label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StepProgress;
