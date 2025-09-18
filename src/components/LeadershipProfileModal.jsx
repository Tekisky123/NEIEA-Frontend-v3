import React from 'react';

const LeadershipProfileModal = ({ isOpen, onClose, memberData }) => {
  if (!isOpen || !memberData) return null;

  return (
    <>
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal Content */}
        <div
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Close profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Header Section */}
          <div
            className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-600"
            style={{
              background: "linear-gradient(135deg, #06038F 0%, #4F46E5 100%)",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="relative h-full flex items-end p-8">
              <div className="flex items-end space-x-6">
                {/* Profile Image */}
                <div className="relative">
                  <img
                    src={memberData.image}
                    alt={memberData.name}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
                  />
                </div>
                {/* Name and Position */}
                <div className="text-white mb-4">
                  <h1 className="text-4xl font-bold mb-2">{memberData.name}</h1>
                  <p className="text-xl opacity-90">{memberData.position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Bio Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-3 text-blue-600"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    About
                  </h2>
                  <div className="prose prose-lg text-gray-600 leading-relaxed">
                    {memberData.bio ? (
                      <p>{memberData.bio}</p>
                    ) : (
                      <p>
                        A dedicated professional committed to advancing education
                        and making a positive impact in the community. With
                        extensive experience in their field, they bring valuable
                        expertise and leadership to the organization.
                      </p>
                    )}
                  </div>
                </div>

                {/* Experience Section */}
                {memberData.experience && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-3 text-blue-600"
                      >
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      Experience
                    </h2>
                    <div className="text-gray-600 leading-relaxed">
                      <p>{memberData.experience}</p>
                    </div>
                  </div>
                )}

                {/* Achievements Section */}
                {memberData.achievements && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-3 text-blue-600"
                      >
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                      </svg>
                      Achievements
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {memberData.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Quick Info Card */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Quick Info
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-3 text-gray-500"
                      >
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      <span className="text-gray-600">{memberData.position}</span>
                    </div>
                    {memberData.department && (
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-3 text-gray-500"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9,22 9,12 15,12 15,22"></polyline>
                        </svg>
                        <span className="text-gray-600">{memberData.department}</span>
                      </div>
                    )}
                    {memberData.location && (
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-3 text-gray-500"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span className="text-gray-600">{memberData.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Expertise Card */}
                {memberData.expertise && (
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {memberData.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadershipProfileModal;
