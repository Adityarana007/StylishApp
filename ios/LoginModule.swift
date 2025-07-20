//
//  LoginModule.swift
//  stylishApp
//
//  Created by Aditya on 02/07/25.
//

import Foundation
import UIKit
import React

@objc(LoginModule)

class LoginModule: NSObject{
  @objc func openLoginScreen() {
    DispatchQueue.main.async {
      if let rootView = UIApplication.shared.keyWindow?.rootViewController{
        let viewController = LoginViewController()
        rootView.present(viewController, animated: true, completion: nil)
      }
    }
  }
  
  @objc static func requiresMainQueueSetup()->Bool {
    return true
  }

}
